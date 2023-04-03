import { Link } from "react-router-dom";
import { Footer } from "../components";

export const Unauthorized = () => {
  /** Pagina del error 401 */
  return (
    <div className="onlyFooterG">
      <br/>
      <h1>401: Por favor inicia sesión para ver esta página</h1>
      <Link to='/login'>Ir a la pagina para iniciar sesión</Link>
      <Footer/>
    </div>
  )
};
