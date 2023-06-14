import { Directions, UserInterface, UserStatus } from '../interfaces'
import { Sprite } from '../sprites/characters'

export class User {
  id: string
  name: string
  position: {
    x: number
    y: number
  }
  status: UserStatus = 'idle'
  frame: number = 0
  count: number = 0
  direction: Directions = 'down'

  constructor(user: UserInterface, private readonly sprite: Sprite) {
    this.id = user.id
    this.name = user.name
    this.position = user.position
    this.status = user.status
  }

  private spriteLoop(speed: number) {
    if (this.count % speed === 0) this.frame++

    this.count++
  }

  private print() {
    const { x, y } = this.position

    this.sprite.print(this.direction, this.status, this.frame, x, y)
  }

  update(user: UserInterface) {
    this.position = user.position
    this.status = user.status
    this.direction = user.direction

    this.spriteLoop(10)
    this.print()
  }
}
