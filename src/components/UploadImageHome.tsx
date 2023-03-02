import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/UploadImageHome.css'

export const UploadImageHome = () => {

  const [getFotoPerfil, setFotoPerfil] = ['/Image_by_LaBruixa_from_Pixabay.png', ''] //TODO useProfileImage()
  const [getInteracted, setInteracted] = useState(false);
  const [getValueInput, setValueInput] = useState('');

  const inputChanged = (evento: ChangeEvent<HTMLInputElement>) => {
    setValueInput(evento.target.value)
    setInteracted(true)
  }

  return (
    <>
      {
        getInteracted ?
        <div className="sombra" onClick={() => setInteracted(false)}/>
        :
        <div/>
      }
      <div className="component uploadImage">

        <div className='visibleUpload'>

          <Link to="/profile">
            <img className='roundedImages' src={getFotoPerfil} alt="Foto de perfil" width='56' height='56'/>
          </Link>

          <input 
            className="yellowInputText inputUpload"
            id='busqueda' type='text'
            placeholder='¿Qué ha hecho tu mascota hoy?'
            value={getValueInput}
            onChange={(evt) => inputChanged(evt)}
            onClick={() => setInteracted(false)}/>
        </div>

        {
          getInteracted ?
          <div>
            <br/>
            <div className='zoneUpload'>
            
              <label htmlFor='filezone'>
                Haz click aqui para <br/>
                subir tu imagen <br/>
                &#40;PNG o JPG&#41;<br/>
              </label>
              <input id='filezone' className='hidden' type='file' name='image' accept="image/png, image/jpeg"/>

            </div>
            <br/>
            <button className='yellow_button publicarUpload'>Publicar</button>
          </div>
          :
          <div/>
        }
      </div>
    </>
  )
}
