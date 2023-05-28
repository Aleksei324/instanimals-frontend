import { Link } from "react-router-dom";
import '../../styles/shared/Header.css'
import { UploadImageHome } from "./UploadImageHome";
import { useSelector } from "react-redux";

export const Header = () => {

  const {userID, tipo, picture} = useSelector( (state: any) => state.userSlice)
  return (
    <header className="header flexG">
      <Link className="titleHeader d-none d-md-inline" to="/home"> INSTANIMALS </Link>

      <UploadImageHome/>

      <div>
        {
          tipo === 'USER' ?
          <>
            <Link className="spaceHeader d-none d-md-inline" to="/chat">
              <span className="d-none d-xl-inline">Chat </span>
              <img className="iconLinksHeader" src="/icons/send_y.png" alt="Chat" width='20' height='20' />
            </Link>

            <Link className="spaceHeader d-none d-md-inline" to="/cart">
              <span className="d-none d-xl-inline">Carrito </span>
              <img className="iconLinksHeader" src="/icons/cart_y.png" alt="Carrito de compras" width='20' height='20' />
            </Link>
          </>
          :
          <></>
        }
        <Link className="spaceHeader" to={`/profile/${userID}`}>
          <span className="d-none d-xl-inline">Mi perfil </span>
          <img className="iconLinksHeader roundedImagesG" src={picture} alt="Foto de perfil" width='42' height='42' />
        </Link>
      </div>
    </header>
  );
};
