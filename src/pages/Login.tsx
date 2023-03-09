import { Footer, Register, Popup } from "../components";
import { useState } from "react";
import '../styles/Login.css';

export const Login = () => {
  const [getRegistroUsuario, setRegistroUsuario] = useState(false);
  const [getRegistroVet, setRegistroVet] = useState(false);

  const turnBothOff = () => {
    setRegistroUsuario(false)
    setRegistroVet(false)
  }

  return (
    <div className="login">

      <div className="img_bgLogin"></div>
      <div className="diagonal_bgLogin"></div>

      {
        getRegistroUsuario ?
        <Popup closeFunction={() => turnBothOff()}>
          <Register tipo='usuario'/>
        </Popup>
        :
        <div/>
      }

      {
        getRegistroVet ?
        <Popup closeFunction={() => turnBothOff()}>
          <Register tipo='vet'/>
        </Popup>
        :
        <div/>
      }

      <div className="visibleLogin">
        <h1>INSTANIMALS</h1>

        <div>
          <div className="componentG">
            <form className="componentLogin">
              <div>
                <label htmlFor="inputmail">Correo electrónico</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="email" id="inputmail" name="mail" /><br/>
              </div>

              <div>
                <label htmlFor="inputpwd">Contraseña</label><br/>
                <input className="yellowInputTextG inputFullLogin" type="password" id="inputpwd" />
              </div>

              <button className="yellowButtonG buttonLogin" type="submit">Iniciar sesión</button>
            </form>
          </div>

          <div className="texto-abajoLogin">
            ¿Aún no tienes una <a onClick={() => setRegistroUsuario(true)}>cuenta</a>? <br/>
            ¿Eres una marca <a onClick={() => setRegistroVet(true)}>veterinaria</a>?
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
};
