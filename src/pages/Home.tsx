import { Link, Navigate } from "react-router-dom";
import { FeedHome, Layout } from "../components";
import "../styles/Home.css";
import { useSelector } from "react-redux";

export const Home = () => {

  const {name, picture, tipo} = useSelector( (state: any) => state.userSlice)
  return (
    <>
      {
        tipo === 'USER' ?
        <Layout>
          <>
          <br/>
          <br/>
          <div className="flexHome">
            <div className="componentG">
              <input className="yellowInputTextG" type="search" placeholder="Buscar perfiles" /><br/>
              <img className="roundedImagesG" src={picture} alt="Foto de perfil" width='42' height='42' />
              Buenos días<br/>
              <Link to='/profile'>{name}</Link>
            </div>
            <FeedHome profileName=''/>
          </div>
          </>
        </Layout>
        :
        <Navigate to='/profile' />
      }
    </>
  );
};
