import { FeedHome, Layout } from "../components";
import { NoProfileFound } from "./";
import { useProfile } from "../helpers";
import '../styles/Profile.css'

export const Profile = () => {
  
  const { getExistPage, getProfileName,
    getProfileTipo, getProfilePic,
    getProfileDesc, getProfileA1,
    getProfileA2, profileID } = useProfile()
  return (
    <>
      {
        getExistPage ?
        <Layout>
          <>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">

              <div className="row g-0">
                <div className="componentG col-12">
                  <img className="bannerProfile" alt="Colourful banner" src='/bg/banner-pfp-Oberholster-Venita-pixabay.jpg' />
                  <div className="flexG profileDesc">
                    <img className="roundedImagesG pfpProfile" src={getProfilePic} alt="big profile picture" width='250' height='250' />
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
                  <FeedHome profileID={profileID} />
                  <div className="popupBoxG"></div>
                </div>
                <div className="col-2" />
              </div>
            </div>
          </>
        </Layout>
        :
        <NoProfileFound/>
      }
    </>
  )
}
