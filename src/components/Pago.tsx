import "../styles/Login.css";
import '../styles/Register.css';

interface poputProps {
  tipo: string
}

export const Pago = ({ tipo }: poputProps) => {
  return (
    <form className="componentLogin container">
      {
        tipo === 'metodoPago' ?
          <>
            <div className="titlePopup row">
              <div className="col-12">
                <span className="titleRegister">Ingrese su tarjeta</span>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputname">Nombre en la tarjeta</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="text" id="inputname" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputNum">Número de la tarjeta</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="number" id="inputNum" />
              </div>
            </div>
            <div className='cerca row'>
              <div className="col-6">
                <label htmlFor="inputCVV">CVV</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="number" id="inputCVV" />
              </div>

              <div className="col-6">
                <label htmlFor="inputVenc">Vencimiento</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="date" id="inputVenc" />
              </div>
            </div>
          </>
        :
          <>
            <div className="titlePopup row">
              <div className="col-12">
                <span className="titleRegister">Ingrese su dirección</span><br/>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputDireccion">Dirección de envío</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="text" id="inputDireccion" />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputCiudad">Ciudad de envío</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="text" id="inputCiudad" />
              </div>
            </div>
          </>
      }
      <br/>
      <div className="row">
        <div className="col-12">
          <button className='yellowButtonG buttonLogin' type="submit">Guardar</button>
        </div>
      </div>
    </form>
  )
};
