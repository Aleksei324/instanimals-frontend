import { Header, Comment } from "../components";
import '../styles/Chat.css'

export const Chat = () => {
  return (
    <div>
      <Header/>
      <br/><br/><br/><br/><br/><br/>
      <div className="componentG chat">
        <Comment nombre='Aurelio' texto="mensaje de placeholder"/>
        <Comment nombre='Aurelio' texto="mensaje de placeholder"/>
        <Comment nombre='Aurelio' texto="mensaje de placeholder"/>
        <Comment nombre='Aurelio' texto="mensaje de placeholder"/>
        <Comment nombre='Aurelio' texto="mensaje de placeholder"/>
        <input className="yellowInputTextG" type="text" />
        <button className="yellowButtonG">Enviar</button>
      </div>
    </div>
  )
};
