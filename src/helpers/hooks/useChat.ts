import { useEffect, useState } from "react"
import { stateParams } from "./useCommentZone"
import { placeholderComments } from "../../placeholders"
import { socket } from "../../sockets"
import { useSelector } from "react-redux"

export const useChat = (max: number) => {
  const [inputText, setInputText] = useState('')
  const [getCommentsArray, setCommentsArray] = useState<stateParams[]>(placeholderComments)
  const {name} = useSelector( (state: any) => state.userSlice)

  const buttonAction = () => {
    
    if (inputText !== '') {
      newCommentCreated(name, inputText)
      socket.emit('mensaje-enviado', {name: name, text: inputText})

      setInputText('')
    }
  }

  const newCommentCreated = (n: string, t: string) => {
    const temp = [...getCommentsArray]
    temp.push({name: n, text: t})

    while (temp.length > max) {
      temp.splice(0, 1)
    }
    setCommentsArray([...temp])
  }

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => {
      console.log('Conectado al servidor')
    })
    socket.on('disconnect', () => {
      console.log('Desconectado del servidor')
    })
    socket.on('mensaje-nuevo', (payload) => {
      newCommentCreated(payload.name, payload.text)
    })

    const temp = [...getCommentsArray]
    
    while (temp.length > max) {
      temp.splice(0, 1)
    }
    setCommentsArray([...temp])

    return () => {
      socket.disconnect()
      socket.off('connect')
      socket.off('disconnect')
      socket.off('mensaje-nuevo')
    }
  }, [])

  return {
    inputText: inputText,
    setInputText: setInputText,
    buttonAction: buttonAction,
    getCommentsArray: getCommentsArray,
    name: name
  }
}
