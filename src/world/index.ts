import { KeyboardWalkEvent } from '../handlers/keyboard'
import { UserInterface, WorldConstructorInterface } from '../interfaces'
import { Sprite } from '../sprites'
import { IanConfig } from '../sprites/characters/ian/config'
import { User } from '../user/user'
import { Debounce } from '../utils/debounce'

export class World {
  private socket: WorldConstructorInterface['socket']
  private ctx: CanvasRenderingContext2D | null
  private userList: Map<String, User> = new Map()

  constructor({ socket, $canvas }: WorldConstructorInterface) {
    this.socket = socket
    this.ctx = $canvas.getContext('2d')
  }

  init() {
    this.keyboardWalk()
    this.update()
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

  update() {
    this.socket.on('world:update', ({ userList }) => {
      this.ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight)
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
