import { SceneryConfig } from '../../interfaces/scenery'

export class Scenery {
  image: HTMLImageElement
  constructor(private readonly sceneryConfig: SceneryConfig, private readonly ctx: CanvasRenderingContext2D) {
    this.image = new Image(sceneryConfig.fullSize.width, sceneryConfig.fullSize.height)
    this.image.src = sceneryConfig.path
  }

  print(width: number, height: number) {
    this.ctx.drawImage(
      this.image,
      this.sceneryConfig.location.x,
      this.sceneryConfig.location.y,
      this.sceneryConfig.location.width,
      this.sceneryConfig.location.height,
      0,
      0,
      width,
      height
    )
  }
}
