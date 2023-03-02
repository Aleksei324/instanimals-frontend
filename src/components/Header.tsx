import { Link } from "react-router-dom";
import '../styles/Header.css'

export const Header = () => {

  const [getFotoPerfil, setFotoPerfil] = ['/Image_by_LaBruixa_from_Pixabay.png', ''] //TODO

  return (
    <header className="header">
      <Link className="titleHeader" to="/"> INSTANIMALS </Link>

      <form>
        <input className="yellowInputText buscadorHeader" id='busqueda' name="q" type='text' placeholder='¿Qué buscas?'/>
      </form>

      <div className="linksHeader">
        <Link to="/cart">
          Carrito 
          <img className="iconLinksHeader" src="/icons/cart.png" alt="Carrito de compras" width='32' height='32'/>
        </Link>

        <Link className="spaceHeader" to="/profile">
          Mi perfil 
          <img className="iconLinksHeader roundedImages" src={getFotoPerfil} alt="Foto de perfil" width='32' height='32'/>
        </Link>
      </div>
    </header>
  );
};
