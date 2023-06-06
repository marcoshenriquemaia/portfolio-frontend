import { Directions, PositionInterface } from '.'

export type UserStatus = 'idle' | 'walk'

export interface UserInterface {
  id: string
  name: string
  position: PositionInterface
  status: UserStatus
  direction: Directions
}
