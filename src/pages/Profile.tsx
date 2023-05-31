import { AdsSideHome, FeedHome, Footer, Header } from "../components";
import { NoProfileFound } from "./";
import { useProfile } from "../helpers";
import '../styles/Profile.css'

export const Profile = () => {
  
  const { getExistPage, getProfileName,
    getProfileTipo, getProfilePic,
    getProfileDesc, getProfileA1,
    getProfileA2, profileID, 
    inputFile, onChangeInput, userID } = useProfile()
  return (
    <>
      <Header/>
      {
        getExistPage ?
          <>
            <>
              <br/>
              <br/>
              <br/>
              <br/>
              <main className="container">

                <div className="row g-0">
                  <div className="componentG col-12">
                    <img className="bannerProfile" alt="Colourful banner" src='/bg/banner-pfp-Oberholster-Venita-pixabay.jpg' />
                    <div className="flexG profileDesc">

                      <img className="roundedImagesG pfpProfile" src={getProfilePic==='' && profileID === userID ? '/bg/no-pfp.png' : getProfilePic} 
                        title={profileID === userID ? "Cambia tu foto de perfil":'Foto de perfil'} alt="big profile picture" width='250' height='250' 
                        onClick={profileID === userID ? () => inputFile.current?.click() : () => {}} />

                      <input className="ultraHiddenG" type='file' accept="image/png, image/jpeg"
                        ref={inputFile} onChange={(evt) => onChangeInput(evt.target.files)} />

                      <div className="textoProfile">
                        {
                          getProfileTipo === 'USER' ?
                          <span>{getProfileA1} &bull; {getProfileA2} {getProfileA2 === 1 ? 'año' : 'años'} de edad</span>
                          :
                          <span>NIT {getProfileA1}</span>
                        }
                        <h1>{getProfileName}</h1>
                        <hr/>
                        <p>{getProfileDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-0 justify-content-center">
                  <div className="col-2" />
                  <div className="col-8">
                    {
                      getProfileTipo === 'USER' ?
                        <FeedHome profileID={profileID} />
                      :
                        <AdsSideHome profileID={profileID} />
                    }
                  </div>
                  <div className="col-2" />
                </div>
              </main>
            </>
            <Footer/>
          </>
        :
        <NoProfileFound/>
      }
    </>
  )
}
