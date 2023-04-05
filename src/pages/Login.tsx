import { Footer, Register, Popup } from "../components";
import { useState } from "react";
import '../styles/Login.css';

export const Login = () => {
  const [getRegistroUsuario, setRegistroUsuario] = useState(false);
  const [getRegistroVet, setRegistroVet] = useState(false);

  return (
    <div className="login onlyFooterG">

      <div className="img_bgLogin"></div>
      <div className="diagonal_bgLogin"></div>

      <Popup activation={getRegistroUsuario} setActivation={setRegistroUsuario}>
        <Register tipo='usuario'/>
      </Popup>

      <Popup activation={getRegistroVet} setActivation={setRegistroVet}>
        <Register tipo='vet'/>
      </Popup>

      <div className="visibleLogin">
        <div>
          <h1>INSTANIMALS</h1>
          <p>
            Crea y comparte historias, situaciones graciosas o<br/>
            aventuras sobre tu mascota en una red social<br/>
            especialmente creada para ella.
          </p>
        </div>

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
