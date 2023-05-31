import { useUploadImageHome } from '../../helpers'
import '../../styles/shared/UploadImageHome.css'

export const UploadImageHome = () => {

  const {getInteracted, setInteracted,
    getValueInput, setValueInput,
    getValueInputPrice, setValueInputPrice, 
    onPublicar, tipo, onDroppedFile, getImgUploaded,
    setInputFileChange} = useUploadImageHome()
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
          maxLength={50} autoComplete="off" />

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
              <label htmlFor='filezone' className='zoneUpload labelUpload yellowLabelG' 
                  onDrop={(evt) => onDroppedFile(evt)} onDragOver={(evt) => evt.preventDefault()}>
                {
                  getImgUploaded ?
                    <>
                      Imagen<br/>
                      cargada con<br/>
                      éxito<br/>
                    </>
                  :
                    <>
                      Haz click aquí para<br/>
                      subir tu imagen<br/>
                      &#40;PNG o JPG&#41;<br/>
                    </>
                }
              </label>
              <input id='filezone' className='ultraHiddenG' type='file' name='imageUpload'
                onChange={(evt) => setInputFileChange(evt.target.files)} accept="image/png, image/jpeg"/>

              <button className='yellowButtonG publicarUpload' onClick={() => onPublicar()}>Publicar</button>
            </div>
          :
            <></>
        }
      </div>
    </>
  )
}
