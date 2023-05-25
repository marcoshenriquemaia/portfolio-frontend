import { GameConfig } from "../config/game";
import { Directions } from "../interfaces";
import { getCharacterMovementDirection } from "../utils/getCharacterMovementDirection";

type SubscribeHandler = (coord: { x: number, y: number }, direction: Directions) => void;

export class ClickHandler {
  private clickDown = false;
  private direction: Directions = "up";
  private subscribers: SubscribeHandler[] = [];
  constructor({
    $canvas,
  }: {
    $canvas: HTMLCanvasElement;
  }) {
    $canvas.addEventListener("pointerdown", this.handleDown.bind(this));
    $canvas.addEventListener("pointerup", this.handleUp.bind(this));
    $canvas.addEventListener("pointermove", this.handleMouseMove.bind(this));
    window.addEventListener("mouseleave", this.handleWindowMouseLeave.bind(this));

    this.loop();
  }

  handleMouseMove(event: MouseEvent) {
    const { x, y } = event;

    this.direction = getCharacterMovementDirection(window.innerWidth, window.innerHeight,x, y);
  }
  
  handleDown(event: MouseEvent) {
    const { x, y } = event;

    this.clickDown = true;

    this.direction = getCharacterMovementDirection(window.innerWidth, window.innerHeight,x, y);
  }

  handleWindowMouseLeave(){
    this.clickDown = false;
  }

  handleUp() {
    this.clickDown = false;
  }

  subscribe(handler: SubscribeHandler) {
    this.subscribers.push(handler);
  }  

  unsubscribe(handler: SubscribeHandler) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== handler);
  }

  notify(coord: { x: number, y: number }, direction: Directions) {
    this.subscribers.forEach(subscriber => subscriber(coord, direction));
  }

  loop() {
    const notify = () => {
      if (!this.clickDown) return;
      this.notify({ x: 0, y: 0 }, this.direction);
    }

    setInterval(notify, GameConfig.tickRate);
  }
  
}