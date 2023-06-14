import { ObjectsConfig, PositionInterface } from '../../interfaces'

export class WorldObjects {
  image: HTMLImageElement = new Image()

  constructor(private readonly config: ObjectsConfig) {
    this.image.src = this.config.path
  }

  print(ctx: CanvasRenderingContext2D, position: PositionInterface, userPosition: PositionInterface) {
    ctx.drawImage(
      this.image,
      this.config.position.x,
      this.config.position.y,
      this.config.size.width,
      this.config.size.height,
      position.x - userPosition.x,
      position.y - userPosition.y,
      this.config.size.width,
      this.config.size.height
    )
  }

  getCollision(playerPosition: PositionInterface): Boolean {
    if (!this.config.collision) return false

    const { x, y } = playerPosition
    const { from, to } = this.config.collision

    return x >= from.x && x <= to.x && y >= from.y && y <= to.y
  }
}
