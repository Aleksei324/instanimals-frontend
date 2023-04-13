import { useState } from "react";
import { Header, CommentZone } from "../components";
import '../styles/Chat.css'

export const Chat = () => {
  const [inputText, setInputText] = useState('')
  
  const buttonAction = () => {
    if (inputText !== '') {
      // TODO ENVIAR INPUTTEXT AL SERVER
      setInputText('')
    }
  }

  return (
    <div>
      <Header/>
      <div className="chat ">
        <div className="chatComments">
          <CommentZone id_post="" nuevoComentarioAbajo={true} maxComentarios={10} /> {/** TODO POST ID */}
        </div>

        <div className="chatInput inputAndButtonCommentG">
          <input type="text" value={inputText} onChange={(x) => setInputText(x.target.value)} placeholder="Publica un mensaje en el chat general..." />
          <button onClick={() => buttonAction()}>Enviar</button>
        </div>
      </div>
    </div>
  )
};
