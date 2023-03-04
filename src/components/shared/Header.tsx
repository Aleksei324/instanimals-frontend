import { Link } from "react-router-dom";
import '../../styles/shared/Header.css'

export const Header = () => {

  const [getFotoPerfil, setFotoPerfil] = ['/placeholders/placeholder-posts.png', ''] //TODO

  return (
    <header className="header">
      <Link className="titleHeader" to="/"> INSTANIMALS </Link>

      <form>
        <input className="yellowInputTextG buscadorHeader" id='busqueda' name="q" type='text' placeholder='¿Qué buscas?'/>
      </form>

      <div className="linksHeader">
        <Link to="/cart">
          Carrito 
          <img className="iconLinksHeader" src="/icons/cart.png" alt="Carrito de compras" width='32' height='32'/>
        </Link>

        <Link className="spaceHeader" to="/profile">
          Mi perfil 
          <img className="iconLinksHeader roundedImagesG" src={getFotoPerfil} alt="Foto de perfil" width='32' height='32'/>
        </Link>
      </div>
    </header>
  );
};
