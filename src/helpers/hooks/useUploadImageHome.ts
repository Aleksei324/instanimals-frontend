import { useState } from "react"
import { useSelector } from "react-redux"

export const useUploadImageHome = () => {
  const [getInteracted, setInteracted] = useState(false)
  const [getImgUploaded, setImgUploaded] = useState(false)
  const [getValueInput, setValueInput] = useState('')
  const [getValueInputPrice, setValueInputPrice] = useState('')
  const [getInputFile, setInputFile] = useState<File|null>(null)

  const onPublicar = () => {
    // TODO upload to server
    setImgUploaded(false)
    setValueInput('')
    setValueInputPrice('')
    setInteracted(false)
  }

  const onDroppedFile = (evt: any) => {
    evt.preventDefault()
    let files = evt.dataTransfer.files

    if (files !== null) {
      if ( files[0].type === "image/png" || files[0].type === "image/jpeg" ) {
        setInputFile(files[0])
        setImgUploaded(true)
      }
    }
  }

  const setInputFileChange = (files: FileList|null) => {
    if (files !== null) {
      if ( files[0].type === "image/png" || files[0].type === "image/jpeg" ) {
        setInputFile(files[0])
        setImgUploaded(true)
      }
    }
  }

  const tipo = useSelector( (state: any) => state.userSlice.tipo)

  return {
    getInteracted: getInteracted,
    setInteracted: setInteracted,
    getImgUploaded: getImgUploaded,
    getValueInput: getValueInput,
    setValueInput: setValueInput,
    getValueInputPrice: getValueInputPrice,
    setValueInputPrice: setValueInputPrice,
    onPublicar: onPublicar,
    tipo: tipo,
    onDroppedFile: onDroppedFile,
    setInputFileChange: setInputFileChange
  }
}
