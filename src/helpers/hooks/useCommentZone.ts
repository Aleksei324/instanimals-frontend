import { useEffect, useState } from "react"
import { placeholderComments } from "../../placeholders"

export interface stateParams {
  name: string,
  text: string
}

export const useCommentZone = (id: string, max: number, nuevoComentarioAbajo: boolean) => {

  const [getCommentsArray, setCommentsArray] = useState<stateParams[]>(placeholderComments)

  const newCommentCreated = (n: string, t: string) => {
    const temp = [...getCommentsArray]

    if (temp.length < max) {
      if (nuevoComentarioAbajo) {
        temp.push({name: n, text: t})
      }
      else {
        temp.unshift({name: n, text: t})
      }
    }
    else {
      if (nuevoComentarioAbajo) { 
        temp.push({name: n, text: t})
        while (temp.length > max) {
          temp.splice(0, 1)
        }
      }
      else {
        temp.unshift({name: n, text: t})
        while (temp.length > max) {
          temp.splice(temp.length - 1, 1)
        }
      }
    }
    setCommentsArray([...temp])
  }

  useEffect(() => {
    // TODO SOCKET
    newCommentCreated('Camilo', 'Como no existe servidor, tus mensajes no van a ningún lado todavía')
  },[])

  return getCommentsArray
}
