import { memo } from "react";
import { CommentZone } from "./";
import "../styles/PostHome.css"
import { Link } from "react-router-dom";
import { postParams } from "../helpers";

interface postProps {
  data: postParams
}

export const PostHome = memo( ({data}: postProps) => {
  return (
    <div className="componentG post">

      <div className="titlePost">
        <Link to={`/profile/${data.user.userID}`}>
          <img className="roundedImagesG" src={data.user.pic} alt="Foto de perfil" width='56' height='56'/>
        </Link>

        <div>
          <b>{data.user.name}</b><br/>
          {data.desc}
        </div>
      </div>

      <img className="imagePost" src={data.pic}
        alt="Imagen de la publicación" width='700' />

      <div className="likeSectionPost">

        <button className="likeButtonPost">
          <img src="/icons/love.png" width='25' height='25' alt='' />
          {data.likes}
        </button>

        <span className="inputAndButtonCommentG">
          <input 
            className="inputComentarioPost"
            type='text'
            placeholder='Deja un comentario...'
            maxLength={50} />
          <button>Publicar</button>
        </span>
      </div>

      <CommentZone id_post={data.postID} nuevoComentarioAbajo={false} maxComentarios={5} />
    </div>
  );
});
