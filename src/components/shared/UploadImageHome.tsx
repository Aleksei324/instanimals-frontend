import { ChangeEvent, useState } from 'react'
import '../../styles/shared/UploadImageHome.css'

export const UploadImageHome = () => {
  const [getInteracted, setInteracted] = useState(false)
  const [getImgUploaded, setImgUploaded] = useState(true)
  const [getValueInput, setValueInput] = useState('')

  const inputChanged = (evento: ChangeEvent<HTMLInputElement>) => {
    setValueInput(evento.target.value)
  }

  return (
    <>
      <div className={getInteracted ? "sombraG":"hiddenG"} onClick={() => setInteracted(false)}/>

      <div className="componentG uploadImage">

        <input 
          className="yellowInputTextG inputUpload"
          type='text'
          placeholder='¿Qué ha hecho tu mascota hoy?'
          value={getValueInput}
          onChange={(evt) => inputChanged(evt)}
          onFocus={() => {setInteracted(true)}}/>

        <div className={getInteracted?'':'ultraHiddenG'}>

          <br/>
          <label htmlFor='filezone' className='zoneUpload labelUpload yellowLabelG'>
            Haz click aquí para<br/>
            subir tu imagen<br/>
            &#40;PNG o JPG&#41;<br/>
          </label>
          { getImgUploaded ? <p>Imagen guardada</p> : ""}
          <input id='filezone' className='hiddenG' type='file' name='imageUpload' accept="image/png, image/jpeg"/>

          <button className='yellowButtonG publicarUpload'>Publicar</button>
        </div>
      </div>
    </>
  )
}
