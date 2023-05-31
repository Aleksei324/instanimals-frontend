import { io } from 'socket.io-client'

export const socket = io('https://instanimals-backend.onrender.com:4000', {
  autoConnect: false
})
