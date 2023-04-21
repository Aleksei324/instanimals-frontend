import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authComplete, waitAuth } from "../../store/userSlice"

export const useLogin = () => {
  const [getRegistroUsuario, setRegistroUsuario] = useState(false)
  const [getRegistroVet, setRegistroVet] = useState(false)
  const [getInputMail, setInputMail] = useState('')
  const [getInputPWD, setInputPWD] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogin = () => {
    dispatch(waitAuth())

    // TODO API
    const userData = {
      name: 'Apri',
      picture: '/placeholders/profile-photo.jpg',
      tipo: 'USER'
    }

    localStorage.setItem('name', userData.name)
    localStorage.setItem('picture', userData.picture)
    localStorage.setItem('tipo', userData.tipo)
    localStorage.setItem('auth', '1')

    dispatch(authComplete(userData))
    navigate('/home')
  }
  
  return {
    getRegistroUsuario: getRegistroUsuario,
    setRegistroUsuario: setRegistroUsuario,
    getRegistroVet: getRegistroVet,
    setRegistroVet: setRegistroVet,
    getInputMail: getInputMail,
    setInputMail: setInputMail,
    getInputPWD: getInputPWD,
    setInputPWD: setInputPWD,
    onLogin: onLogin
  }
}
