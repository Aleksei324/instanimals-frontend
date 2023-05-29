import { Link } from "react-router-dom";
import { Footer, Header } from "../components";

export const NoProfileFound = () => {
  return (
    <div className="onlyFooterG">
      <h1 className="notFoundG">404: Perfil no existente</h1>
      <Link to='/home'><h2>Volver al inicio</h2></Link>
      <Footer/>
    </div>
  )
}
