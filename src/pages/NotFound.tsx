import { Link } from "react-router-dom";
import { Footer } from "../components";

export const NotFound = () => {
  /** Pagina del error 404 */
  return (
    <div className="onlyFooterG">
      <br/>
      <h1>404: Oops, página no encontrada</h1>
      <Link to='/'>Volver al inicio</Link>
      <Footer/>
    </div>
  )
};
