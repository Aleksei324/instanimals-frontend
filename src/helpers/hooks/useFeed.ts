import { useEffect, useState } from "react"
import { placeholderPosts } from "../../placeholders"

export interface postParams {
  id: string,
  name: string,
  pfp: string,
  pic: string,
  desc: string,
  likes: number
}

export const useFeed = (profileName: string | undefined) => {

  const [getPostsArray, setPostsArray] = useState<postParams[]>([]) // array con IDs de los posts

  useEffect(() => {
    if (profileName === '') {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR LOS POSTS MÁS RECIENTES
      setPostsArray([...placeholderPosts])
    }
    else {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR POST DE ESE PERFIL
      const temp = []
      
      for (const post of placeholderPosts) {
        if (profileName === post.name) {
          temp.push(post)
        }
      }
      setPostsArray([...temp])
    }
  },[])

  return getPostsArray
}
