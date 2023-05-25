import { Link, Navigate } from "react-router-dom";
import { FeedHome, Layout } from "../components";
import { useHome } from "../helpers";
import "../styles/home.css";

export const Home = () => {

  const { userID, name, picture,
    tipo, getSearchValue,
    setSearchValue, onSearch} = useHome()
  return (
    <>
      {
        tipo === 'USER' ?
        <Layout>
          <>
          <br/>
          <br/>
          <div className="flexHome">
            <div className="componentG welcomeHome">

              <form onSubmit={() => onSearch()}>
                <label className='sr-only ultraHiddenG' htmlFor='inputSearchProfile'>Buscar perfil</label>
                <input className="yellowInputTextG searchWelcomeHome" id="inputSearchProfile"
                  value={getSearchValue} onChange={(evt) => setSearchValue(evt.target.value)} 
                  type="search" placeholder="Buscar perfiles" /><br/>
              </form>

              <div className="flexHome">
                <img className="roundedImagesG" src={picture} alt="Foto de perfil" width='42' height='42' />
                <div>
                  <h4>Buenos días<br/><Link to={`/profile/${userID}`}>{name}</Link></h4>
                </div>
              </div>

              <div className="fotosRecientesHome">
                Tus fotos más recientes:<br/>
                <img src="/placeholders/post-photo-1.jpg" alt='foto reciente' width='100' height='100' />
                <img src="/placeholders/post-photo-2.jpg" alt='foto reciente' width='100' height='100' />
                <img src="/placeholders/post-photo-3.jpg" alt='foto reciente' width='100' height='100' /><br/>
                <img src="/placeholders/post-photo-4.jpg" alt='foto reciente' width='100' height='100' />
                <img src="/placeholders/post-photo-5.jpg" alt='foto reciente' width='100' height='100' />
              </div>
            </div>
            <div>
              <FeedHome profileName=''/>
            </div>
          </div>
          </>
        </Layout>
        :
        <Navigate to='/profile' />
      }
    </>
  );
};
