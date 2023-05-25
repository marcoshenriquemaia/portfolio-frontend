import { Directions } from "../interfaces";

export function getCharacterMovementDirection(screenWidth: number, screenHeight: number, clickX: number, clickY: number): Directions {
  const x = clickX - screenWidth / 2;
  const y = clickY - screenHeight / 2;

  const angle = Math.atan2(y, x) * 180 / Math.PI;

  if (angle > -22.5 && angle <= 22.5) {
    return "right";
  }

  if (angle > 22.5 && angle <= 67.5) {
    return "down-right";
  }

  if (angle > 67.5 && angle <= 112.5) {
    return "down";
  }

  if (angle > 112.5 && angle <= 157.5) {
    return "down-left";
  }

  if (angle > 157.5 || angle <= -157.5) {
    return "left";
  }

  if (angle > -157.5 && angle <= -112.5) {
    return "up-left";
  }

  if (angle > -112.5 && angle <= -67.5) {
    return "up";
  }

  if (angle > -67.5 && angle <= -22.5) {
    return "up-right";
  }

  return "up";
}
