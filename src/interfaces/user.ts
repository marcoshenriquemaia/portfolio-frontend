import { PositionInterface } from ".";

export type UserStatus = 'idle' | 'walk' | 'run';

export interface UserInterface {
  id: string;
  name: string;
  position: PositionInterface;
  status: UserStatus;
}