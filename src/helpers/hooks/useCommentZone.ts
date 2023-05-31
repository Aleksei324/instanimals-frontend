import { useEffect, useState } from "react"
import { placeholderComments } from "../../placeholders"
import { postParams } from "../../helpers"
import { useSelector } from "react-redux"

export interface stateParams {
  name: string,
  text: string
}

export const useCommentZone = (id: string, max: number, datos: postParams) => {

  const [getCommentsArray, setCommentsArray] = useState<stateParams[]>([])
  const [inputText, setInputText] = useState('')
  const [getLikes, setLikes] = useState(datos.likes)
  const [getLiked, setLiked] = useState(false)
  const {name} = useSelector( (state: any) => state.userSlice)

  const newCommentCreated = () => {
    // TODO: AQUI TOCA PONER LA API
    if (inputText !== '') {
      const temp = [...getCommentsArray]
      temp.unshift({name: name, text: inputText})

      while (temp.length > max) {
        temp.splice(temp.length - 1, 1)
      }
      setCommentsArray([...temp])

      setInputText('')
    }
  }

  const likeAction = () => {
    if (getLiked) {
      setLikes(x => x - 1)
      setLiked(false)
    }
    else {
      setLikes(x => x + 1)
      setLiked(true)
    }
  }

  useEffect(() => {
    // TODO: OBTENER COMENTARIOS CON API
    setLiked(false)

    const temp = [...placeholderComments]

    while (temp.length > max) {
      temp.splice(temp.length - 1, 1)
    }
    setCommentsArray([...temp])
  }, [])

  return {
    inputText: inputText,
    setInputText: setInputText,
    getCommentsArray: getCommentsArray,
    getLikes: getLikes,
    getLiked: getLiked,
    likeAction: likeAction,
    newCommentCreated: newCommentCreated,
    name: name
  }
}
