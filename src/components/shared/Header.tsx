import { Link } from "react-router-dom"
import { UploadImageHome } from "./UploadImageHome"
import { useSelector } from "react-redux"
import '../../styles/shared/Header.css'

export const Header = () => {

  const {userID, tipo, picture, cart} = useSelector( (state: any) => state.userSlice)
  return (
    <header className="header flexG">

      <Link title="Regresar al feed principal" 
        className="titleHeader d-none d-md-inline" 
        to="/home"> INSTANIMALS </Link>

      <UploadImageHome/>

      <nav className="d-none d-md-inline">
        {
          tipo === 'USER' ?
          <>
            <Link className="spaceHeader" to="/chat">
              <span className="d-none d-xl-inline">Chat </span>
              <img className="iconLinksHeader" src="/icons/send_y.png"
                alt="" title='Chat' width='20' height='20' />
            </Link>

            <Link className="spaceHeader" to="/cart">
              <span className="d-none d-xl-inline">Carrito</span>
              <img className="iconLinksHeader" src="/icons/cart_y.png"
                alt="" title='Carrito' width='20' height='20' />
              {cart.length > 0 ? <sub> &#40;{cart.length}&#41;</sub> : <></>} 
            </Link>
          </>
          :
          <></>
        }
        <Link className="spaceHeader" to={`/profile/${userID}`}>
          <span className="d-none d-xl-inline">Mi perfil </span>
          <img className="iconLinksHeader roundedImagesG" src={picture}
            alt="" title='Mi perfil' width='42' height='42' />
        </Link>
      </nav>
    </header>
  )
}
