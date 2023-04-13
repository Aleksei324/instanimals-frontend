import { useEffect, useState } from "react"

export interface stateParams {
  name: string,
  text: string
}

export const useCommentZone = (valorInicial: stateParams[], max: number, nuevoComentarioAbajo: boolean) => {

  const [getCommentsArray, setCommentsArray] = useState(valorInicial)

  const newCommentCreated = (n: string, t: string) => {
    let temp = []

    if (getCommentsArray.length < max) {
      if (nuevoComentarioAbajo) {
        setCommentsArray(x => [...x, {name: n, text: t}])
      }
      else {
        setCommentsArray(x => [{name: n, text: t}, ...x])
      }
    }
    else {
      if (nuevoComentarioAbajo) { 
        temp = [...getCommentsArray]
        temp.push({name: n, text: t})
        temp.splice(0, 1)
        setCommentsArray(temp)
      }
      else {
        temp = [...getCommentsArray]
        temp.unshift({name: n, text: t})
        temp.splice(temp.length - 1, 1)
        setCommentsArray(temp)
      }
    }
  }

  useEffect(() => {
    // TODO SOCKET
    
    setTimeout(() => newCommentCreated('Juanjo', 'Hey, que tal?'), 1000)
    setTimeout(() => newCommentCreated('Aurelio', 'precioso'), 2000)
    setTimeout(() => newCommentCreated('Matru', 'Gracias por sus comentarios'), 3000)
    setTimeout(() => newCommentCreated('Apolo', 'me encanta <3'), 4000)
    setTimeout(() => newCommentCreated('Juanjo', 'Hey, que tal?'), 5000)
  },[])

  return getCommentsArray
}
