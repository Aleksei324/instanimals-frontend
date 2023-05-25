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
    let temp
    if (profileID === '2121335') {
      temp = placeholderProfiles[0]

      setExistPage(true)
      setProfileName(temp.name)
      setProfileTipo(temp.tipo)
      setProfilePic(temp.pic)
      setProfileDesc(temp.desc)
      setProfileA1(temp.raza || '')
      setProfileA2(temp.edad || 0)
    }
    else if (profileID === '2121336') {
      temp = placeholderProfiles[1]

      setExistPage(true)
      setProfileName(temp.name)
      setProfileTipo(temp.tipo)
      setProfilePic(temp.pic)
      setProfileDesc(temp.desc)
      setProfileA1(temp.raza || '')
      setProfileA2(temp.edad || 0)
    }
    else if (profileID === '2121337') {
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