import { Header } from "../components"
import { useChat } from "../helpers"
import '../styles/Chat.css'

export const Chat = () => {

  const {inputText, setInputText, buttonAction, getCommentsArray, name} = useChat(18)
  return (
    <div>
      <Header/>
      <main className="chat container">
        <div className="row">
          <div className="chatComments col-12">
            <div className="gradientChat" aria-hidden="true" />
            <div className="commentZone">
              {
                getCommentsArray.map( (comment, key) => {
                  return (
                    <p key={key}><b className={comment.name === name ? 'myComment':''}>{comment.name}: </b>{comment.text}</p>
                  )
                })
              }
            </div>
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
              id="inputChat" value={inputText} autoComplete="off"
              onChange={(x) => setInputText(x.target.value)}
              placeholder="Publica un mensaje en el chat general..." 
              maxLength={50} />

            <button className="col-3 col-lg-2 col-xl-1" onClick={() => buttonAction()}>Enviar</button>
          </form>
        </div>
      </main>
    </div>
  )
}
