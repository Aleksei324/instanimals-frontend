import { useState } from "react"
import { useSelector } from "react-redux"

export const useUploadImageHome = () => {
  const [getInteracted, setInteracted] = useState(false)
  const [getImgUploaded, setImgUploaded] = useState(false)
  const [getValueInput, setValueInput] = useState('')
  const [getValueInputPrice, setValueInputPrice] = useState('')

  const onPublicar = () => {
    // TODO upload to server
    setImgUploaded(false)
    setValueInput('')
    setValueInputPrice('')
    setInteracted(false)
  }

  const tipo = useSelector( (state: any) => state.userSlice.tipo)

  return {
    getInteracted: getInteracted,
    setInteracted: setInteracted,
    getImgUploaded: getImgUploaded,
    setImgUploaded: setImgUploaded,
    getValueInput: getValueInput,
    setValueInput: setValueInput,
    getValueInputPrice: getValueInputPrice,
    setValueInputPrice: setValueInputPrice,
    onPublicar: onPublicar,
    tipo: tipo
  }
}
