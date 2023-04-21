import { useUploadImageHome } from '../../helpers'
import '../../styles/shared/UploadImageHome.css'

export const UploadImageHome = () => {

  const {getInteracted, setInteracted,
    getImgUploaded, setImgUploaded,
    getValueInput, setValueInput,
    getValueInputPrice, setValueInputPrice, 
    onPublicar, tipo} = useUploadImageHome()
  return (
    <>
      <div className={getInteracted ? "sombraG":"hiddenG"} onClick={() => setInteracted(false)}/>

      <div className="componentG uploadImage">

        <label className='sr-only ultraHiddenG' htmlFor='inputSubmitImage'>Texto del post</label>
        {
          tipo === 'USER' ? 
          <input 
            className="yellowInputTextG inputUpload inputDescUpload"
            type='text'
            id='inputSubmitImage'
            placeholder='¿Qué ha hecho tu mascota hoy?'
            value={getValueInput}
            onChange={(evt) => setValueInput(evt.target.value)}
            onFocus={() => {setInteracted(true)}}
            maxLength={50} />
          :
          <input 
            className="yellowInputTextG inputUpload inputProductUpload"
            type='text'
            id='inputSubmitImage'
            placeholder='¿Qué vas a vender esta semana?'
            value={getValueInput}
            onChange={(evt) => setValueInput(evt.target.value)}
            onFocus={() => {setInteracted(true)}}
            maxLength={20} />
        }

        <div className={getInteracted?'':'ultraHiddenG'}>

          {
            tipo === 'VET' ? 
            <>
              <label className='sr-only ultraHiddenG' htmlFor='inputPriceSubmitImage'>Precio del producto</label>
              <input 
                className="yellowInputTextG inputUpload inputPriceUpload"
                type='number'
                id='inputPriceSubmitImage'
                placeholder='Precio (COP)'
                value={getValueInputPrice}
                onChange={(evt) => Number(evt.target.value) > 0 ? setValueInputPrice(evt.target.value) : setValueInputPrice('')}
                maxLength={10} />
            </>
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
