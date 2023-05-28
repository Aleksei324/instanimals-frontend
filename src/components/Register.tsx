import "../styles/Login.css";
import '../styles/Register.css';

interface poputProps {
  tipo: string
}

export const Register = ({ tipo }: poputProps) => {
  return (
    <form className="componentLogin container">
      {
        tipo === 'usuario'?
          <>
            <div className="titlePopup row">
              <div className="col-12">
                <span className="titleRegister">Registro de mascota</span><br/>
                ¡Únete a nuestra gran comunidad!
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputmail">Correo electrónico</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="email" id="inputmail" name="mail" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputpwd">Contraseña</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="password" id="inputpwd" />
              </div>
            </div>

            <br/>

            <div className='cerca row'>
              <div className="col-6">
                <label htmlFor="inputnombre">Username</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputnombre" name="nombre" />
              </div>

              <div className="col-6">
                <label htmlFor="inputespecie">Especie</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputespecie" name="especie" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputfecha">Fecha de nacimiento</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="date" id="inputfecha" name="fecha" />
              </div>
            </div>
          </>
        :
          <>
            <div className="titlePopup row">
              <div className="col-12">
                <span className="titleRegister">Registro de marca</span><br/>
                Millones de oportunidades para su negocio.
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputmail">Correo electrónico</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="email" id="inputmail" name="mail" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputpwd">Contraseña</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="password" id="inputpwd" />
              </div>
            </div>

            <br/>

            <div className='cerca row'>
              <div className="col-6">
                <label htmlFor="inputnombre">Nombre</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputnombre" name="nombre" />
              </div>

              <div className="col-6">
                <label htmlFor="inputpais">País</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputpais" name="pais" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputnit">NIT</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="text" id="inputnit" name="nit" />
              </div>
            </div>
          </>
      }
      <br/>
      <div className="row justify-content-center">
        <div className="col-12">
          Al hacer click en "Registrarse", aceptas nuestras<br/>
          <a href="/tyc">condiciones</a>,
          la politica de privacidad y de cookies
          <button className='yellowButtonG buttonLogin' type="submit">Registrarse</button>
        </div>
      </div>
    </form>
  )
};
