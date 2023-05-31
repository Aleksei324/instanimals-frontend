import { useEffect, useState } from "react"
import { placeholderAds } from "../../placeholders"

export interface adsParams {
  postID: string,
  user: {
    userID: string,
    name: string
  },
  pic: string,
  name: string,
  price: number,
  bought: boolean
}

export const useAds = (profileID: string | undefined) => {

  const [getAdsArray, setAdsArray] = useState<adsParams[]>([]) // array con IDs de los posts

  useEffect(() => {
    if (profileID === '') {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR LOS POSTS MÁS RECIENTES
      setAdsArray([...placeholderAds])
    }
    else {
      // TODO LLAMAR A LA BASE DE DATOS PARA CONSEGUIR POST DE ESE PERFIL
      const temp = []

      for (const post of placeholderAds) {
        if (profileID === post.user.userID) {
          temp.push(post)
        }
      }
      setAdsArray([...temp])
    }
  },[])

  return getAdsArray
}
