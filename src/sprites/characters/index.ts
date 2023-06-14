import { Status } from '../../interfaces/sprites'
import { Directions } from '../../interfaces'
import { SpriteConfig } from '../../interfaces/sprites'
export class Sprite {
  image: HTMLImageElement
  frame: number = 0
  count: number = 0
  constructor(private readonly spriteConfig: SpriteConfig, private readonly ctx: CanvasRenderingContext2D) {
    this.image = new Image(spriteConfig.fullSize.width, spriteConfig.fullSize.height)
    this.image.src = spriteConfig.path
  }

  print(direction: Directions, status: Status, frame: number, x: number, y: number) {
    const sprites = this.spriteConfig.sprites[status][direction]
    const { x: sx, y: sy, width: s_width, height: s_height } = sprites[frame % sprites.length]

    this.ctx.drawImage(this.image, sx, sy, s_width, s_height, x, y, s_width, s_height)
  }
}
