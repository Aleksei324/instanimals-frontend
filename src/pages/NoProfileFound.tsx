import { Link } from "react-router-dom";
import { Footer, Header } from "../components";

export const NoProfileFound = () => {
  return (
    <div className="onlyFooterG">
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>404: Perfil no existente</h1>
      <Link to='/home'>Volver al inicio</Link>
      <Footer/>
    </div>
  )
};
