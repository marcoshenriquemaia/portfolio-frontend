import { io } from 'socket.io-client'

export const socket = io('https://worldapi.revele.live', {
  transports: ['websocket'],
})

socket.on('connect', () => {
  console.log('websocket connected')
})
