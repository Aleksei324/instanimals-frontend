import { useParams } from "react-router-dom";
import { FeedHome, Layout } from "../components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NoProfileFound } from "./NoProfileFound";
import { placeholderProfiles } from "../placeholders";

export const Profile = () => {
  const {profileID} = useParams()
  const name = useSelector( (state: any) => state.userSlice.name)

  const [getExistPage, setExistPage] = useState(true)
  const [getProfileName, setProfileName] = useState('')
  const [getProfileTipo, setProfileTipo] = useState('')
  const [getProfilePic, setProfilePic] = useState('')
  const [getProfileDesc, setProfileDesc] = useState('')
  const [getProfileA1, setProfileA1] = useState('') // Raza o NIT
  const [getProfileA2, setProfileA2] = useState(0) // Edad

  useEffect(() => {
    // TODO get profile with api
    let temp
    if (profileID === 'Apri') {
      temp = placeholderProfiles[0]

      setExistPage(true)
      setProfileName(temp.name)
      setProfileTipo(temp.tipo)
      setProfilePic(temp.pic)
      setProfileDesc(temp.desc)
      setProfileA1(temp.raza || '')
      setProfileA2(temp.edad || 0)
    }
    else if (profileID === 'Anacleto') {
      temp = placeholderProfiles[1]

      setExistPage(true)
      setProfileName(temp.name)
      setProfileTipo(temp.tipo)
      setProfilePic(temp.pic)
      setProfileDesc(temp.desc)
      setProfileA1(temp.raza || '')
      setProfileA2(temp.edad || 0)
    }
    else if (profileID === 'NaranjasLab') {
      temp = placeholderProfiles[2]

      setExistPage(true)
      setProfileName(temp.name)
      setProfileTipo(temp.tipo)
      setProfilePic(temp.pic)
      setProfileDesc(temp.desc)
      setProfileA1(temp.nit || '')
    }
    else {
      setExistPage(false)
    }
  },[])

  return (
    <>
      {
        getExistPage ?
        <Layout>
          <>
            <br/>
            <div className="flexProfile componentG">
              <img className="roundedImagesG" src={getProfilePic} alt="big profile picture" />
              <div>
                {
                  getProfileTipo === 'USER'?
                  <p>{getProfileA1} &bull; {getProfileA2} {getProfileA2 === 1 ? 'año' : 'años'} de edad</p>
                  :
                  <p>NIT {getProfileA1}</p>
                }
                <h1>{getProfileName}</h1>
                <p>{getProfileDesc}</p>
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
