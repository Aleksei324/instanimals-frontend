import { postParams, useCommentZone } from "../helpers"
import '../styles/CommentZone.css'

export interface commentZoneProps {
  id_post: string,
  maxComentarios: number,
  datos: postParams
}

export const CommentZone = ({id_post, maxComentarios, datos}: commentZoneProps) => { // TODO API

  const { inputText, setInputText, getCommentsArray,
    getLikes, getLiked, likeAction, newCommentCreated, name } = useCommentZone(id_post, maxComentarios, datos)
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">

        {
          /** small: (1) + 3 +  9(11 + 1), 
           * medium: (1) + 3 +  9(7 + 4 + 1), 
           * large:  (1) + 2 + 10(8 + 3 + 1)
           * */
        }

        <button className={`likeButtonPost col-3 col-lg-2 ${getLiked ? 'likedPost':''}`}
            title="Botón de me gusta" onClick={() => likeAction()}>

          <img src="/icons/love.png" width='25' height='25' alt='Corazon del botón de me gusta' />
          {getLikes}
        </button>

        <span className="col-9 col-lg-10">
          <form className="row justify-content-center inputAndButtonCommentG" onSubmit={(event) => {event.preventDefault(); newCommentCreated()} }>

            <label className="visually-hidden" htmlFor={`${datos.postID}commentInput`}>Añadir comentario en el post</label>
            
            <input id={`${datos.postID}commentInput`}
              className="inputComentarioPost col-11 col-md-7 col-lg-8"
              type='text' placeholder='Deja un comentario...' value={inputText}
              onChange={(x) => setInputText(x.target.value)}
              maxLength={50} autoComplete="off" />

            <button onClick={() => newCommentCreated()} className="col-4 col-lg-3">Publicar</button>
          </form>
        </span>
      </div>

      <div className="row">
        <div className="col-12 commentZone">
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
  )
}
