import { useDispatch, useSelector } from "react-redux"
import { adsParams } from "./useAds"
import { addToCart, removeFromCart } from '../../store/userSlice'
import { useState } from "react"

export const useAdHome = (data: adsParams) => {

  const dispatch = useDispatch()
  const [getBought, setBought] = useState(data.bought)

  const onAdd = () => {

    if (getBought) {
      dispatch(removeFromCart(data.postID))
      setBought(false)
    }
    else {
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
          price: data.price,
          bought: data.bought
        }
      }
      dispatch(addToCart(temp))
      setBought(true)
    }
  }

  return {
    onAdd:onAdd,
    getBought:getBought
  }
}
