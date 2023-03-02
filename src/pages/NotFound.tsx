import { Link } from "react-router-dom";
import { Footer } from "../components";
import '../styles/NotFound.css'

export const NotFound = () => {
  /** Pagina del error 404 */
  return (
    <div className="notfound">
      <br/>
      <h1>404: Oops, página no encontrada</h1>
      <Link to='/'>Volver al inicio</Link>
      <Footer/>
    </div>
  )
};
