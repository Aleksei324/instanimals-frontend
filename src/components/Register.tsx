import "../styles/Login.css";
import '../styles/Register.css';

interface poputProps {
  tipo: string
}

export const Register = ({ tipo }: poputProps) => {
  return (
    <form className="componentLogin">
      {
        tipo === 'usuario'?
          <>
            <div className="titlePopup">
              <h1>Registro de mascota</h1>
              <p>¡Únete a nuestra gran comunidad!</p>
            </div>

            <div>
              <label htmlFor="inputmail">Correo electrónico</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="email" id="inputmail" name="mail" />
            </div>

            <div>
              <label htmlFor="inputpwd">Contraseña</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="password" id="inputpwd" />
            </div>

            <br/>

            <div className='cerca'>
              <div>
                <label htmlFor="inputnombre">Nombre</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputnombre" name="nombre" />
              </div>

              <div>
                <label htmlFor="inputespecie">Especie</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputespecie" name="especie" />
              </div>
            </div>

            <div>
              <label htmlFor="inputfecha">Fecha de nacimiento</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="date" id="inputfecha" name="fecha" />
            </div>
          </>
        :
          <>
            <div className="titlePopup">
              <h1>Registro de marca</h1>
              <p>Millones de oportunidades para su negocio.</p>
            </div>

            <div>
              <label htmlFor="inputmail">Correo electrónico</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="email" id="inputmail" name="mail" />
            </div>

            <div>
              <label htmlFor="inputpwd">Contraseña</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="password" id="inputpwd" />
            </div>

            <br/>

            <div className='cerca'>
              <div>
                <label htmlFor="inputnombre">Nombre</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputnombre" name="nombre" />
              </div>

              <div>
                <label htmlFor="inputpais">País</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputpais" name="pais" />
              </div>
            </div>

            <div>
              <label htmlFor="inputnit">NIT</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="text" id="inputnit" name="nit" />
            </div>
          </>
      }
      <br/>
      <div>
        Al hacer click en "Registrarse", aceptas nuestras<br/>
        <a href="/tyc" target="_blank">condiciones</a>,
        la politica de privacidad y de cookies
        <button className='yellowButtonG buttonLogin' type="submit">Registrarse</button>
      </div>
        
    </form>
  )
};
