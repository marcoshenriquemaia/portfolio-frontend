import './styles/style.css'
import './styles/reset.css'
import { socket } from './socket/index.ts'
import { World } from './world/index.ts'

const $app = document.querySelector('#app')

const $canvas = document.createElement('canvas')
$canvas.id = 'main-canvas'
$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

$app?.appendChild($canvas)

const world = new World({
  socket,
  $canvas,
})

world.init()

socket.on('connect', () => {})