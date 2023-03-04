import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/UploadImageHome.css'
import { UploadZoneHome } from './UploadZoneHome';

export const UploadImageHome = () => {

  const [getFotoPerfil, setFotoPerfil] = ['/placeholders/placeholder-posts.png', ''] //TODO useProfileImage()
  const [getInteracted, setInteracted] = useState(false);
  const [getValueInput, setValueInput] = useState('');

  const inputChanged = (evento: ChangeEvent<HTMLInputElement>) => {
    setValueInput(evento.target.value)
  }

  return (
    <>
      <div className={getInteracted ? "sombraG":"hiddenG"} onClick={() => setInteracted(false)}/>

      <div className="componentG uploadImage">

        <div className='visibleUpload'>

          <Link to="/profile">
            <img className='roundedImagesG'
              src={getFotoPerfil}
              alt="Foto de perfil"
              width='56' height='56'/>
          </Link>

          <input 
            className="yellowInputTextG inputUpload"
            type='text'
            placeholder='¿Qué ha hecho tu mascota hoy?'
            value={getValueInput}
            onChange={(evt) => inputChanged(evt)}
            onFocus={() => {setInteracted(true)}}/>
        </div>

        <div className={getInteracted?'':'ultraHiddenG'}>
          <UploadZoneHome/>
        </div>
      </div>
    </>
  )
}
