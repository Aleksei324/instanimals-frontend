import { Dispatch, SetStateAction, useState } from "react";
import "../styles/Login.css";
import '../styles/Register.css';

interface poputProps {
  tipo: string,
  setActivation: Dispatch<SetStateAction<boolean>>,
  setter: Dispatch<SetStateAction<string>>
}

export const Pago = ({ tipo, setActivation, setter }: poputProps) => {

  const [getInputNumTarjeta, setInputNumTarjeta] = useState('')
  const [getInputDireccion, setInputDireccion] = useState('')

  const onPago = () => {
    if (tipo === 'metodoPago') {
      if (getInputNumTarjeta.trim().length === 16) {
        setter(getInputNumTarjeta.trim())
        localStorage.setItem('numTarjeta', getInputNumTarjeta.trim())
        setActivation(false)
      }
    }
    else {
      if (getInputDireccion.trim() !== '') {
        setter(getInputDireccion.trim())
        localStorage.setItem('direccion', getInputDireccion.trim())
        setActivation(false)
      }
    }
  }
  return (
    <form className="componentLogin container" onSubmit={(evt) => {evt.preventDefault(); onPago()} }>
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
                <input className="yellowInputTextG inputFullLogin" type="number" id="inputNum"
                  value={getInputNumTarjeta} onChange={(evt) => setInputNumTarjeta(evt.target.value)} />
              </div>
            </div>
            <div className='cerca row'>
              <div className="col-6">
                <label htmlFor="inputCVV">CVV</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="number" id="inputCVV" />
              </div>

              <div className="col-6">
                <label htmlFor="inputVenc">Vencimiento</label><br/>
                <input className="yellowInputTextG inputHalfLogin" type="month" id="inputVenc" />
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
                <input className="yellowInputTextG inputFullLogin" type="text" id="inputDireccion"
                  value={getInputDireccion} onChange={(evt) => setInputDireccion(evt.target.value)} />
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
          <button className='yellowButtonG buttonLogin' onClick={() => onPago()}>Guardar</button>
        </div>
      </div>
    </form>
  )
}
