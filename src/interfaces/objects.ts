import { PositionInterface } from '.'

export interface ObjectsConfig {
  name: string
  path: string
  size: {
    width: number
    height: number
  }
  position: PositionInterface
  animated: boolean
  collision?: {
    from: PositionInterface
    to: PositionInterface
  }
}
