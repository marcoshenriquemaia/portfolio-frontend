import { Directions } from '.'

export type Status = 'walk' | 'idle'

export interface SpriteMovement {
  x: number
  y: number
  width: number
  height: number
}

export interface SpriteConfig {
  path: string
  fullSize: {
    width: number
    height: number
  }
  sprites: Record<Status, Record<Directions, SpriteMovement[]>>
}
