import { Link } from "react-router-dom";
import { Footer } from "../components";

export const NotFound = () => {
  /** Pagina del error 404 */
  return (
    <div className="onlyFooterG">
      <h1 className="notFoundG">404: Oops, página no encontrada</h1>
      <Link to='/'><h2>Volver al inicio</h2></Link>
      <Footer/>
    </div>
  )
}
