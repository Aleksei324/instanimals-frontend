import { Link } from "react-router-dom";
import '../../styles/shared/Header.css'
import { UploadImageHome } from "./UploadImageHome";

export const Header = () => {

  const getFotoPerfil = '/placeholders/placeholder-posts.png' //TODO

  return (
    <header className="header">
      <Link className="titleHeader" to="/home"> INSTANIMALS </Link>

      <UploadImageHome/>

      <div>
        <Link className="spaceHeader" to="/chat">
          Chat 
          <img className="iconLinksHeader" src="/icons/send_y.png" alt="Chat" width='20' height='20' />
        </Link>

        <Link className="spaceHeader" to="/cart">
          Carrito 
          <img className="iconLinksHeader" src="/icons/cart.png" alt="Carrito de compras" width='20' height='20' />
        </Link>

        <Link className="spaceHeader" to="/profile">
          Mi perfil 
          <img className="iconLinksHeader roundedImagesG" src={getFotoPerfil} alt="Foto de perfil" width='42' height='42' />
        </Link>
      </div>
    </header>
  );
};
