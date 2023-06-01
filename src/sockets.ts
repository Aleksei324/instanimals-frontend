import { io } from 'socket.io-client'

export const socket = io('http://198.58.123.63:4000', {
  autoConnect: false
})
