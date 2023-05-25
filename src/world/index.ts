import { ClickHandler } from "../handlers";
import { KeyboardWalkEvent } from "../handlers/keyboard";
import { UserInterface, WorldConstructorInterface } from "../interfaces";
import { User } from "../user/user";

export class World {
  private socket: WorldConstructorInterface['socket'];
  private $canvas: WorldConstructorInterface['$canvas'];
  private ctx: CanvasRenderingContext2D | null;
  private userList: UserInterface[] = [];

  constructor({
    socket,
    $canvas,
  }: WorldConstructorInterface) {
    this.socket = socket;
    this.$canvas = $canvas;
    this.ctx = $canvas.getContext('2d');
  }

  init() {
    const keyboardWalk = new KeyboardWalkEvent()

    // const mouseHandler = new ClickHandler({
    //   $canvas: this.$canvas,
    // })

    keyboardWalk.subscribe((direction) => {
      this.socket.emit('user:walk', direction)
    })

    // mouseHandler.subscribe((coord, direction) => {
    //   this.socket.emit('user:walk', direction)
    // })

    this.socket.on("world:update", ({ userList }) => {
      this.userList = userList;
      this.ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.userList.forEach((user: UserInterface) => {
        const userInstance = new User(user)
        
        userInstance.print(this.ctx, user);
      })
    });
  }

}