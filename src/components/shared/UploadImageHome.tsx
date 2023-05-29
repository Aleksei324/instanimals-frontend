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
      {
        getInteracted ?
          <div className="sombraG" aria-label="Close"
            onClick={() => setInteracted(false)} />
        :
          <></>
      }

      <div className="componentG uploadImage">

        <label className='visually-hidden' htmlFor='inputSubmitImage'>Crear descripción de la publicación</label>

        <input type='text' id='inputSubmitImage'
          className={`yellowInputTextG inputUpload inputDescUpload ${tipo === 'USER'?'inputDescUpload':'inputProductUpload'}`}
          placeholder={tipo === 'USER'?'¿Qué ha hecho tu mascota hoy?':'¿Qué vas a vender esta semana?'}
          value={getValueInput}
          onChange={(evt) => setValueInput(evt.target.value)}
          onFocus={() => {setInteracted(true)}}
          maxLength={50} />

        {
          getInteracted ?
            <div role="dialog">
              {
                tipo === 'VET' ? 
                <>
                  <label className='visually-hidden' htmlFor='inputPriceSubmitImage'>Precio del producto de la publicación</label>
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
          :
            <></>
        }
      </div>
    </>
  )
}
