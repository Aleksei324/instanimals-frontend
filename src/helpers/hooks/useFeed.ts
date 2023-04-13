import { useEffect, useState } from "react"

export const useFeed = (profileName: string) => {

  const [getPostsArray, setPostsArray] = useState<string[]>([]) // array con IDs de los posts

  useEffect(() => {
    if (profileName === '') {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR LOS POSTS MÁS RECIENTES
      setPostsArray(['1','2','3'])
    }
    else {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR POST DE ESE PERFIL
      setPostsArray(['4','5','6'])
    }
  },[])

  return getPostsArray
}
