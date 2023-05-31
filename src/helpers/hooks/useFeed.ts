import { useEffect, useState } from "react"
import { placeholderPosts } from "../../placeholders"

export interface postParams {
  postID: string,
  user: {
    userID: string,
    name: string,
    pic: string
  },
  pic: string,
  desc: string,
  likes: number,
  liked: boolean
}

export const useFeed = (profileID: string | undefined) => {

  const [getPostsArray, setPostsArray] = useState<postParams[]>([]) // array con IDs de los posts

  useEffect(() => {
    if (profileID === '') {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR LOS POSTS MÁS RECIENTES
      setPostsArray([...placeholderPosts])
    }
    else {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR POST DE ESE PERFIL
      const temp = []
      
      for (const post of placeholderPosts) {
        if (profileID === post.user.userID) {
          temp.push(post)
        }
      }
      setPostsArray([...temp])
    }
  },[profileID])

  return getPostsArray
}
