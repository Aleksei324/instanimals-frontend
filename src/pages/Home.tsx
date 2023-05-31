import { Link, Navigate } from "react-router-dom";
import { AdsSideHome, FeedHome, Layout } from "../components";
import { useHome } from "../helpers";
import "../styles/home.css";
import { Key } from "react";

export const Home = () => {

  const { userID, name, picture,
    tipo, getSearchValue, setSearchValue,
    onSearch, recentImages} = useHome()
  return (
    <>
      {
        tipo === 'USER' ?
        <Layout>
          <>
            <br/>
            <br/>
            <br/>
            <div className="container-fluent home">
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

                  <div className="row">
                    <form className="col-12" role="search" onSubmit={() => onSearch()}>
                      <label className='visually-hidden' htmlFor='inputSearchProfile'>Buscar perfil</label>

                      <input className="yellowInputTextG searchWelcomeHome" id="inputSearchProfile"
                        value={getSearchValue} onChange={(evt) => setSearchValue(evt.target.value)} 
                        type="search" placeholder="Buscar perfiles" autoComplete="off" />
                    </form>
                  </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="flexG">
                          <Link title="Ir a mi perfil" className="sidePfpHome" to={`/profile/${userID}`}>
                            <img className="roundedImagesG" src={picture} alt="Foto de perfil" width='72' height='72' />
                          </Link>

                          <h2>Buenos días<br/>{name}</h2>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <p className="col-12">Tus fotos más recientes:</p>
                    </div>

                    <div className="fotosRecientesHome row g-1">
                      {
                        recentImages.map((image: string, key: Key) => {
                          return <img key={key} className="col-4" src={image} alt='Foto reciente' />
                        })
                      }
                    </div>
                  </div>

                  <div className="d-none d-md-block visible">
                    <AdsSideHome profileID='' />
                  </div>
                </div>

                <main className="col-12 col-md-7 col-xl-6">
                  <FeedHome profileID='' />
                </main>

              </div>
            </div>
          </>
        </Layout>
        :
          <Navigate to={`/profile/${userID}`} />
      }
    </>
  )
}
