import { UserInterface, UserStatus } from "../interfaces";

export class User {
  id: string;
  name: string;
  position: {
    x: number;
    y: number;
  }
  status: UserStatus

  constructor(user: UserInterface){
    this.id = user.id;
    this.name = user.name;
    this.position = user.position;
    this.status = user.status;
  }

  walk(x: number, y: number){
    this.position.x = x;
    this.position.y = y;
    this.status = 'walk';
  }

  print(ctx: CanvasRenderingContext2D | null, user: UserInterface){
    if (ctx) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(user.position.x, user.position.y, 10, 10);
      ctx.stroke();
    }
  }
}