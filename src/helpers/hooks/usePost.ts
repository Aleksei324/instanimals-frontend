import { useState } from "react"
import { postParams } from "./useFeed"

export const usePost = (datos: postParams) => {

  const [getLikes, setLikes] = useState(datos.likes)
  const [getLiked, setLiked] = useState(false)

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

  const commentAction = () => {

  }

  return {
    likeAction: likeAction,
    commentAction: commentAction,
    getLikes: getLikes,
    getLiked: getLiked
  }
}
