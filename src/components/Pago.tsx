import "../styles/Login.css";
import '../styles/Register.css';

interface poputProps {
  tipo: string
}

export const Pago = ({ tipo }: poputProps) => {
  return (
    <form className="componentLogin">
      {
        tipo === 'metodoPago'?
          <>
            <div className="titlePopup">
              <span className="titleRegister">Ingrese su tarjeta</span><br/>
            </div>

            <div>
              <label htmlFor="inputmail">Número de la tarjeta</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="email" id="inputmail" name="mail" />
            </div>

            <div>
              <label htmlFor="inputpwd">Ingrese su tarjeta</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="password" id="inputpwd" />
            </div>
            <div className='cerca'>
              <div>
                <label htmlFor="inputnombre">CVV</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="text" id="inputnombre" name="nombre" />
              </div>
            </div>

            <div>
              <label htmlFor="inputfecha">Vencimiento</label><br/>
              <input className="yellowInputTextG inputHalfLogin" type="month" id="inputfecha" name="fecha" />
            </div>
          </>
        :
        tipo === 'ubicacion'?
          <>
            <div className="titlePopup">
              <span className="titleRegister">Ingrese su dirección</span><br/>
              
            </div>

            <div>
              <label htmlFor="inputmail">Dirección de envío</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="text" id="inputmail" name="direccion" />
            </div>

            <div>
              <label htmlFor="inputpwd">Ciudad de envío</label><br/>
              <input className="yellowInputTextG inputFullLogin" type="text" id="inputpwd" />
            </div>
          </>
          :
          null
      }
      <br/>
      <div>
        <button className='yellowButtonG buttonLogin' type="submit">Guardar</button>
      </div>
        
    </form>
  )
};
