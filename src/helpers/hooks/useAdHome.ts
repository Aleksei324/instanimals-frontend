import { useDispatch, useSelector } from "react-redux"
import { adsParams } from "./useAds"
import { addToCart, removeFromCart } from '../../store/userSlice'
import { useState } from "react"

export const useAdHome = (data: adsParams) => {

  const dispatch = useDispatch()
  const [getBought, setBought] = useState(false)

  const onAdd = () => {
    const temp = {
      cant: 1,
      ad: {
        postID: data.postID,
        user: {
          userID: data.user.userID,
          name: data.user.name
        },
        pic: data.pic,
        name: data.name,
        price: data.price
      }
    }
    if (getBought) {
      dispatch(removeFromCart(temp.ad.postID))
      setBought(false)
    }
    else {
      dispatch(addToCart(temp))
      setBought(true)
    }
  }

  return {
    onAdd:onAdd,
    getBought:getBought
  }
}
