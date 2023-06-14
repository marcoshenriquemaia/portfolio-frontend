import { SpriteConfig } from '../../../interfaces/sprites'
import { walk, idle } from './sprites'
import Ian from '../../../../assets/ian.png'

export class IanConfig implements SpriteConfig {
  path = Ian
  fullSize = {
    width: 1200,
    height: 800,
  }
  sprites = {
    walk,
    idle,
  }
}
