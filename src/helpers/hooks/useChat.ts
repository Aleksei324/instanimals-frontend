import { useState } from "react"

export const useChat = () => {
  const [inputText, setInputText] = useState('')

  const buttonAction = () => {
    
    if (inputText !== '') {
      // TODO ENVIAR INPUTTEXT AL SERVER
      console.log('DEV: Enviado con exito al servidor.')
      setInputText('')
    }
  }

  return {
    inputText: inputText,
    setInputText: setInputText,
    buttonAction: buttonAction
  }
}
