import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { placeholderProfiles } from "../../placeholders"
import { useDispatch, useSelector } from "react-redux"
import { changePic } from "../../store/userSlice"

export const useProfile = () => {

  const {profileID} = useParams()
  const {userID} = useSelector( (state: any) => state.userSlice)
  const dispatch = useDispatch()

  const [getExistPage, setExistPage] = useState(true)
  const [getProfileName, setProfileName] = useState('')
  const [getProfileTipo, setProfileTipo] = useState('')
  const [getProfilePic, setProfilePic] = useState('')
  const [getProfileDesc, setProfileDesc] = useState('')
  const [getProfileA1, setProfileA1] = useState('') // Raza o NIT
  const [getProfileA2, setProfileA2] = useState(0) // Edad

  const inputFile = useRef<HTMLInputElement|null>(null)

  const onChangeInput = (files: FileList|null) => {
    
    if (files !== null) {
      if ( files[0].type === "image/png" || files[0].type === "image/jpeg" ) {
        let file = files[0]
        // 1 guardar en servidor
        // 2 conseguir la url
        // 3 guardarla en el state y en redux
        // dispatch(changePic(newImage))
      }
    }
  }

  useEffect(() => {
    // TODO get profile with api
    const id = placeholderProfiles.findIndex(x => x.userID === profileID)

    if (id !== -1) {
      setExistPage(true)
      setProfileName(placeholderProfiles[id].name)
      setProfileTipo(placeholderProfiles[id].tipo)
      setProfilePic(placeholderProfiles[id].pic)
      setProfileDesc(placeholderProfiles[id].desc)
      setProfileA1(placeholderProfiles[id].raza || placeholderProfiles[id].nit || '')
      setProfileA2(placeholderProfiles[id].edad || 0)
    }
    else {
      setExistPage(false)
    }
  },[profileID])

  return {
    getExistPage: getExistPage,
    getProfileName: getProfileName,
    getProfileTipo: getProfileTipo,
    getProfilePic: getProfilePic,
    getProfileDesc: getProfileDesc,
    getProfileA1: getProfileA1,
    getProfileA2: getProfileA2,
    profileID: profileID,
    inputFile: inputFile,
    onChangeInput: onChangeInput,
    userID: userID
  }
}
