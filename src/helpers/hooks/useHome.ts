import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { placeholderProfiles } from "../../placeholders"

export const useHome = () => {
  const {userID, name, picture, tipo} = useSelector( (state: any) => state.userSlice)
  const [getSearchValue, setSearchValue] = useState('')
  const [recentImages, setRecentImages] = useState<string[]>([])
  const navigate = useNavigate()

  const onSearch = () => {
    // API
    const temp = placeholderProfiles.findIndex(x => x.name === getSearchValue)

    if (temp !== -1) {
      navigate(`/profile/${placeholderProfiles[temp].userID}`)
    }
    else {
      navigate(`/profile/${getSearchValue}`)
    }
  }

  useEffect(() => {
    const temp = [
      '/placeholders/post-photo-5.jpg',
      '/placeholders/post-photo-4.jpg',
      '/placeholders/post-photo-3.jpg'
    ]

    setRecentImages([...temp])
  },[])

  return {
    userID: userID,
    name: name,
    picture: picture,
    tipo: tipo,
    getSearchValue: getSearchValue,
    setSearchValue: setSearchValue,
    onSearch: onSearch,
    recentImages: recentImages
  }
}
