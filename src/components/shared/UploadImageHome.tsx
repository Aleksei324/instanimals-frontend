import { useState } from 'react'
import '../../styles/shared/UploadImageHome.css'
import { useSelector } from 'react-redux'

export const UploadImageHome = () => {

  const [getInteracted, setInteracted] = useState(false)
  const [getImgUploaded, setImgUploaded] = useState(false)
  const [getValueInput, setValueInput] = useState('')
  const [getValueInputPrice, setValueInputPrice] = useState('')

  const onPublicar = () => {
    // TODO upload to server
    setImgUploaded(false)
    setValueInput('')
    setValueInputPrice('')
    setInteracted(false)
  }

  const tipo = useSelector( (state: any) => state.userSlice.tipo)
  return (
    <>
      <div className={getInteracted ? "sombraG":"hiddenG"} onClick={() => setInteracted(false)}/>

      <div className="componentG uploadImage">

        {
          tipo === 'USER' ? 
          <input 
            className="yellowInputTextG inputUpload inputDescUpload"
            type='text'
            placeholder='¿Qué ha hecho tu mascota hoy?'
            value={getValueInput}
            onChange={(evt) => setValueInput(evt.target.value)}
            onFocus={() => {setInteracted(true)}}
            maxLength={50} />
          :
          <input 
            className="yellowInputTextG inputUpload inputProductUpload"
            type='text'
            placeholder='¿Qué vas a vender esta semana?'
            value={getValueInput}
            onChange={(evt) => setValueInput(evt.target.value)}
            onFocus={() => {setInteracted(true)}}
            maxLength={20} />
        }

        <div className={getInteracted?'':'ultraHiddenG'}>

          {
            tipo === 'VET' ? 
            <input 
              className="yellowInputTextG inputUpload inputPriceUpload"
              type='number'
              placeholder='Precio (COP)'
              value={getValueInputPrice}
              onChange={(evt) => Number(evt.target.value) > 0 ? setValueInputPrice(evt.target.value) : setValueInputPrice('')}
              maxLength={10} />
            :
            <></>
          }
          <br/>
          <label htmlFor='filezone' className='zoneUpload labelUpload yellowLabelG'>
            Haz click aquí para<br/>
            subir tu imagen<br/>
            &#40;PNG o JPG&#41;<br/>
          </label>
          { getImgUploaded ? <p>Imagen guardada</p> : ""}
          <input id='filezone' className='hiddenG' type='file' name='imageUpload'onChange={() => setImgUploaded(true)} accept="image/png, image/jpeg"/>

          <button className='yellowButtonG publicarUpload' onClick={() => onPublicar()}>Publicar</button>
        </div>
      </div>
    </>
  )
}
