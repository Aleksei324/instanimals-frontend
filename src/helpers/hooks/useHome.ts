import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const useHome = () => {
  const {name, picture, tipo} = useSelector( (state: any) => state.userSlice)
  const [getSearchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const onSearch = () => {
    navigate(`/profile/${getSearchValue}`)
  }

  return {
    name: name,
    picture: picture,
    tipo: tipo,
    getSearchValue: getSearchValue,
    setSearchValue: setSearchValue,
    onSearch: onSearch
  }
}
