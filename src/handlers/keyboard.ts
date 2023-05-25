import { GameConfig } from "../config/game";
import { Directions } from "../interfaces";
import { getCharacterMovementDirectionByKey } from "../utils/getCharacterMovementDirectionByKey";

type SubscribeHandler = (direction: Directions) => void;

export class KeyboardWalkEvent {
  private subscribers: SubscribeHandler[] = [];
  private keys: Set<string> = new Set();
  constructor() {
    window.addEventListener("keypress", this.handleWalk.bind(this));
    window.addEventListener("keyup", this.handleStop.bind(this));

    this.loop();
  }

  handleWalk(event: KeyboardEvent) {
    const { key } = event;

    const allowKeys = ["w", "s", "a", "d"];

    if (!allowKeys.includes(key)) return;

    this.keys.add(key);
  }

  handleStop(event: KeyboardEvent) {
    const { key } = event;

    this.keys = new Set([...this.keys].filter(k => k !== key));
  }

  subscribe(handler: SubscribeHandler) {
    this.subscribers.push(handler);
  }

  unsubscribe(handler: SubscribeHandler) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== handler);
  }

  notify(direction: Directions) {
    this.subscribers.forEach(subscriber => subscriber(direction));
  }

  loop() {
    const notify = () => {
      if (this.keys.size === 0) return;
      this.notify(getCharacterMovementDirectionByKey([...this.keys]));
    }

    setInterval(notify, GameConfig.tickRate);
  }

}