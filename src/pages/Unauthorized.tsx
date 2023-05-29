import { Link } from "react-router-dom";
import { Footer } from "../components";

export const Unauthorized = () => {
  /** Pagina del error 401 */
  return (
    <div className="onlyFooterG">
      <h1 className="notFoundG">401: Por favor inicia sesión para ver esta página</h1>
      <Link to='/login'><h2>Ir a la pagina para iniciar sesión</h2></Link>
      <Footer/>
    </div>
  )
}
