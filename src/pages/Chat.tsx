import { Header, CommentZone } from "../components";
import { useChat } from "../helpers";
import '../styles/Chat.css'

export const Chat = () => {

  const {inputText, setInputText, buttonAction} = useChat()
  return (
    <div>
      <Header/>
      <div className="chat container">
        <div className="row">
          <div className="chatComments col-12">
            <div className="gradientChat" />
            <CommentZone id_post="" nuevoComentarioAbajo={true} maxComentarios={18} /> {/** TODO POST ID */}
          </div>
        </div>
        <div className="row">
          <div className="chatInput inputAndButtonCommentG col-12">
            <label className="visually-hidden" htmlFor="inputChat">Añadir mensaje en el chat</label>
            <input type="text" id="inputChat" value={inputText} onChange={(x) => setInputText(x.target.value)} placeholder="Publica un mensaje en el chat general..." maxLength={50} />
            <button onClick={() => buttonAction()}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  )
};
