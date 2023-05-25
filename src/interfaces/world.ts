import { Socket } from "socket.io-client";

export interface WorldConstructorInterface {
  socket: Socket;
  $canvas: HTMLCanvasElement;
}