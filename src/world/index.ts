import { KeyboardWalkEvent } from '../handlers/keyboard'
import { UserInterface, WorldConstructorInterface } from '../interfaces'
import { Sprite } from '../sprites/characters'
import { IanConfig } from '../sprites/characters/ian/config'
import { Scenery } from '../sprites/scenery'
import { sceneryConfig } from '../sprites/scenery/office/config'
import { User } from '../user/user'
import { Debounce } from '../utils/debounce'

export class World {
  private socket: WorldConstructorInterface['socket']
  private ctx: CanvasRenderingContext2D | null
  private userList: Map<String, User> = new Map()
  scenery: Scenery
  private $canvas: HTMLCanvasElement

  constructor({ socket, $canvas }: WorldConstructorInterface) {
    this.socket = socket
    this.ctx = $canvas.getContext('2d')
    this.scenery = new Scenery(sceneryConfig, this.ctx!)
    this.$canvas = $canvas
  }

  init() {
    this.keyboardWalk()
    this.listemWorldUpdate()
  }

  keyboardWalk() {
    const keyboardWalk = new KeyboardWalkEvent()
    const debounce = new Debounce(100)

    keyboardWalk.subscribe((direction) => {
      this.socket.emit('user:walk', direction)
      debounce.run(() => {
        this.socket.emit('user:stop', direction)
      })
    })
  }

  listemWorldUpdate() {
    this.socket.on('world:update', ({ userList }) => {
      console.count()
      this.ctx?.clearRect(0, 0, this.$canvas.width, this.$canvas.height)
      userList.forEach((user: UserInterface) => {
        const currentUser = this.userList.get(user.id)

        if (currentUser) return currentUser.update(user)

        const sprite = new Sprite(new IanConfig(), this.ctx!)

        const newUser = new User(user, sprite)
        this.userList.set(user.id, newUser)
      })
    })
  }
}
