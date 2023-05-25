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
            <div className="componentG componentProfile">
              <div className="bannerProfile" />
              <div className="flexProfile">
                <img className="roundedImagesG pfpProfile" src={getProfilePic} alt="big profile picture" width='250' height='250' />
                <div className="textoProfile">
                  {
                    getProfileTipo === 'USER'?
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

            <div className="feedProfile">
              <FeedHome profileName={profileID} />
            </div>
          </>
        </Layout>
        :
        <NoProfileFound/>
      }
    </>
  );
};
