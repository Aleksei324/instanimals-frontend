import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../store/userSlice"

export const useFooter = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    localStorage.setItem('userID', '')
    localStorage.setItem('tipo', '')
    localStorage.setItem('name', '')
    localStorage.setItem('picture', '')
    localStorage.setItem('auth', '0')

    dispatch(logout())
    navigate('/login')
  }
  return onLogout
}
