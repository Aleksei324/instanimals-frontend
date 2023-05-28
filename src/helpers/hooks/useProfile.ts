import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { placeholderProfiles } from "../../placeholders"

export const useProfile = () => {

  const {profileID} = useParams()

  const [getExistPage, setExistPage] = useState(true)
  const [getProfileName, setProfileName] = useState('')
  const [getProfileTipo, setProfileTipo] = useState('')
  const [getProfilePic, setProfilePic] = useState('')
  const [getProfileDesc, setProfileDesc] = useState('')
  const [getProfileA1, setProfileA1] = useState('') // Raza o NIT
  const [getProfileA2, setProfileA2] = useState(0) // Edad

  useEffect(() => {
    // TODO get profile with api
    const id = placeholderProfiles.findIndex(x => x.userID === profileID)

    if (id !== -1) {
      setExistPage(true)
      setProfileName(placeholderProfiles[id].name)
      setProfileTipo(placeholderProfiles[id].tipo)
      setProfilePic(placeholderProfiles[id].pic)
      setProfileDesc(placeholderProfiles[id].desc)
      setProfileA1(placeholderProfiles[id].raza || '')
      setProfileA2(placeholderProfiles[id].edad || 0)
    }
    else {
      setExistPage(false)
    }
  },[])

  return {
    getExistPage: getExistPage,
    getProfileName: getProfileName,
    getProfileTipo: getProfileTipo,
    getProfilePic: getProfilePic,
    getProfileDesc: getProfileDesc,
    getProfileA1: getProfileA1,
    getProfileA2: getProfileA2,
    profileID: profileID
  }
}
