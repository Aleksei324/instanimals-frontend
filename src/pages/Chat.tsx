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

          {
            /** small: 12 (+3),
             * medium: 8 + 3 (+1),
             * large:  9 + 2 (+1),
             * xl:    10 + 1 (+1)
             * */
          }

          <form className="chatInput inputAndButtonCommentG col-12" onSubmit={(event) => {event.preventDefault(); buttonAction()} }>
            <label className="visually-hidden" htmlFor="inputChat">Añadir mensaje en el chat</label>

            <input className="col-12 col-md-8 col-lg-9 col-xl-10" type="text" 
              id="inputChat" value={inputText} 
              onChange={(x) => setInputText(x.target.value)} 
              placeholder="Publica un mensaje en el chat general..." 
              maxLength={50} />

            <button className="col-3 col-lg-2 col-xl-1" onClick={() => buttonAction()}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
};
