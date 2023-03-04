import '../styles/UploadZoneHome.css'
  
export const UploadZoneHome = () => {
  return (
    <>
      <br/>
      <div className='zoneUpload'>
        <label className='labelUpload' htmlFor='filezone'>
          Haz click aquí para<br/>
          subir tu imagen<br/>
          &#40;PNG o JPG&#41;<br/>
        </label>
      </div>
      <input id='filezone' className='hiddenG' type='file' name='imageUpload' accept="image/png, image/jpeg"/>
      <br/>
      <button className='yellowButtonG publicarUpload'>Publicar</button>
    </>
  )
}
