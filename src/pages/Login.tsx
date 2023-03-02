import { Footer } from "../components";
import '../styles/Login.css';
import Popup from '../components/Popup';
import { useState } from "react";

export const Login = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  return (
    <div className="login">
      <div className="img_bg"></div>
      <div className="diagonal_bg"></div>
      <h1 className="titulo">INSTANIMALS</h1>
      <div className="caja_sesion">
      <form className="component">
        <label htmlFor="inputmail">Correo electrónico</label><br/>
        <input type="text" id="inputmail" name="inputmail" /><br/><br/>
        <label htmlFor="inputpwd">Contraseña</label><br/>
        <input type="password" id="inputpwd" name="inputpwd" />
        <input type="submit" value="Iniciar Sesión" />
      </form>
      <div className="registro">
      <div className="texto-abajo">
        ¿Aún no tienes una <a onClick={() => setButtonPopup(true)} className="url">Cuenta</a>?
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Registro de Mascota</h1>
        <p>Unete a nuestra gran comunidad</p>
        <form className="component-register">
        <label htmlFor="inputmail">Correo electrónico</label><br/>
        <input type="text" id="inputmail" name="inputmail" /><br/><br/>
        <label htmlFor="inputpwd">Contraseña</label><br/>
        <input type="password" id="inputpwd" name="inputpwd" />
          <div className="cerca">
          <label htmlFor="inputmail">Nombre</label><br/>
          <input type="text" id="inputmail" name="inputmail" /><br/><br/>
          <label htmlFor="inputmail">Especie</label><br/>
          <input type="text" id="inputmail" name="inputmail" /><br/><br/>
          </div>
          <label htmlFor="inputpwd">Fecha de nacimiento</label><br/>
        <input type="date" id="inputpwd" name="inputpwd" />
        <p>Al hacer click en "Registrarse", aceptas nuestras Condiciones, la politica de privacidad y de cookies</p>
        <input type="submit" value="Registrarse" />
      </form>
        </Popup>
      </div>
      <div className="texto-abajo">
        ¿Eres una marca <a onClick={() => setButtonPopup1(true)} className="url">Veterinaria</a>?
        <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <h1>Registro de marca</h1>
        <p>Millones de oportunidades para tu negocio</p>
        <form className="component-register">
        <label htmlFor="inputmail">Correo electrónico</label><br/>
        <input type="text" id="inputmail" name="inputmail" /><br/><br/>
        <label htmlFor="inputpwd">Contraseña</label><br/>
        <input type="password" id="inputpwd" name="inputpwd" />
          <div className="cerca">
          <label htmlFor="inputmail">Nombre</label><br/>
          <input type="text" id="inputmail" name="inputmail" /><br/><br/>
          <label htmlFor="inputmail">Especie</label><br/>
          <input type="text" id="inputmail" name="inputmail" /><br/><br/>
          </div>
          <label htmlFor="inputpwd">Fecha de nacimiento</label><br/>
        <input type="date" id="inputpwd" name="inputpwd" />
        <p>Al hacer click en "Registrarse", aceptas nuestras Condiciones, la politica de privacidad y de cookies</p>
        <input type="submit" value="Registrarse" />
      </form>
        </Popup>
        </div>
        </div>
        </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
};
