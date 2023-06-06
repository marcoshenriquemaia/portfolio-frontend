import { SpriteConfig } from '../../../interfaces/sprites'
import { walk, idle } from './sprites'

export class IanConfig implements SpriteConfig {
  path = 'src/sprites/characters/ian/assets/ian.png'
  fullSize = {
    width: 1200,
    height: 800,
  }
  sprites = {
    walk,
    idle,
  }
}
