import { SceneryConfig } from '../../interfaces/scenery'

export class Scenery {
  image: HTMLImageElement
  constructor(private readonly sceneryConfig: SceneryConfig, private readonly ctx: CanvasRenderingContext2D) {
    this.image = new Image(sceneryConfig.fullSize.width, sceneryConfig.fullSize.height)
    this.image.src = sceneryConfig.path
  }

  print(width: number, height: number, x: number = 0, y: number = 0) {
    this.ctx.drawImage(
      this.image,
      x ?? this.sceneryConfig.location.x,
      y ?? this.sceneryConfig.location.y,
      width,
      height,
      0,
      0,
      width,
      height
    )
  }

  getImageFullSize() {
    return this.sceneryConfig.fullSize
  }
}
