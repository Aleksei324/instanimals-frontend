import { Link, Navigate } from "react-router-dom";
import { AdsSideHome, FeedHome, Layout } from "../components";
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
          <br/>
          <div className="container-fluent">
            <div className="row">

              {
                /** small: 12 + 12 (+3),
                 * medium:  5 +  7 (+3),
                 * large:   5 +  7 (+3),
                 * xl:      3 +  6 + 3
                 * */
              }

              <div className="col-12 col-md-5 col-xl-3 sideHome">

                <div className="welcomeHome componentG container-fluent">

                  <form className="row" onSubmit={() => onSearch()}>
                    <label className='visually-hidden' htmlFor='inputSearchProfile'>Buscar perfil</label>

                    <input className="yellowInputTextG searchWelcomeHome" id="inputSearchProfile"
                      value={getSearchValue} onChange={(evt) => setSearchValue(evt.target.value)} 
                      type="search" placeholder="Buscar perfiles" />
                  </form>

                  <div className="flexG">
                    <Link className="sidePfpHome" to={`/profile/${userID}`}>
                      <img className="roundedImagesG" src={picture} alt="Foto de perfil" width='72' height='72' />
                    </Link>
                    
                    <h2>Buenos días<br/>{name}</h2>
                  </div>

                  <p>Tus fotos más recientes:</p>
                  <div className="fotosRecientesHome row g-1">
                    <img className="col-4" src="/placeholders/post-photo-1.jpg" alt='foto reciente' />
                    <img className="col-4" src="/placeholders/post-photo-2.jpg" alt='foto reciente' />
                    <img className="col-4" src="/placeholders/post-photo-3.jpg" alt='foto reciente' />
                  </div>
                </div>

                <div className="d-none d-md-block">
                  <AdsSideHome profileID='' />
                </div>
              </div>

              <div className="col-12 col-md-7 col-xl-6">
                <FeedHome profileID='' />
              </div>

            </div>
          </div>
          </>
        </Layout>
        :
        <Navigate to={`/profile/${userID}`} />
      }
    </>
  );
};
