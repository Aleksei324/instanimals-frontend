import { memo } from "react";
import { CommentZone } from "./";
import "../styles/PostHome.css"
import { Link } from "react-router-dom";
import { postParams, usePost } from "../helpers";

interface postProps {
  data: postParams
}

export const PostHome = memo( ({data}: postProps) => {

  const {likeAction, commentAction, getLiked, getLikes} = usePost(data)
  return (
    <div className="componentG post container">

      <div className="titlePost row">
        <div className="col-12 flexG">
          <Link to={`/profile/${data.user.userID}`}>
            <img className="roundedImagesG" src={data.user.pic} alt="Foto de perfil" width='56' height='56'/>
          </Link>

          <div>
            <b>{data.user.name}</b><br/>
            {data.desc}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <img className="imagePost" src={data.pic}
            alt="Imagen de la publicación" />
        </div>
      </div>

      <div className="row align-items-center">

        {
          /** small: 1 + 3 + 8(11 + 1), 
           * medium: 1 + 3 + 8(7 + 4 + 1), 
           * large:  1 + 2 + 9(8 + 3 + 1)
           * */
        }

        <div className="col-1" />

        <button className={`likeButtonPost col-3 col-lg-2 ${getLiked ? 'likedPost':''}`} onClick={() => likeAction()}>
          <img src="/icons/love.png" width='25' height='25' alt='' />
          {getLikes}
        </button>

        <span className="col-8 col-md-8 col-lg-9">
          <form className="row inputAndButtonCommentG" onSubmit={(event) => {event.preventDefault(); commentAction()} }>

            <label className="visually-hidden" htmlFor={`${data.postID}commentInput`}>Añadir comentario en el post</label>
            
            <input id={`${data.postID}commentInput`} className="inputComentarioPost col-11 col-md-7 col-lg-8"
              type='text' placeholder='Deja un comentario...' maxLength={50} />

            <button onClick={() => commentAction()} className="col-4 col-lg-3">Publicar</button>

            <div className="col-1" />
          </form>
        </span>

      </div>

      <div className="row">
        <div className="col-12">
          <CommentZone id_post={data.postID} nuevoComentarioAbajo={false} maxComentarios={5} />
        </div>
      </div>
    </div>
  );
});
