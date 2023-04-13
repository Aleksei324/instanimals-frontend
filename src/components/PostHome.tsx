import { memo, useState } from "react";
import { CommentZone } from "./";
import "../styles/PostHome.css"
import { Link } from "react-router-dom";

interface postProps {
  idPost: string
}

export const PostHome = memo( ({idPost}: postProps) => {
  const getFotoPerfil = '/placeholders/placeholder-posts.png' //TODO
  const getNombrePerfil = 'Matru husky' //TODO
  const getTexto = 'Cortecito pal rey' //TODO
  const [getLikes, setLikes] = useState(45) //TODO

  return (
    <div className="componentG post">

      <div className="titlePost">
        <Link to={'/profile?q=' + getNombrePerfil}>
          <img className="roundedImagesG" src={getFotoPerfil} alt="Foto de perfil" width='56' height='56'/>
        </Link>

        <div>
          <b>{getNombrePerfil}</b><br/>
          {getTexto}
        </div>
      </div>

      <img className="imagePost" src='/placeholders/placeholder-posts.png'
        alt="Imagen de la publicación" width='700' height='450'/>

      <div className="likeSectionPost">

        <button className="likeButtonPost" type="button" onClick={() => setLikes((x) => x + 1)}>
          <img src="/icons/love.png" width='20' height='20' alt='' />
          {getLikes}
        </button>

        <span className="inputAndButtonCommentG">
          <input 
            className="inputComentarioPost"
            type='text'
            placeholder='Deja un comentario...'/>
          <button>Publicar</button>
        </span>
      </div>

      <CommentZone id_post={idPost} nuevoComentarioAbajo={false} maxComentarios={5} /> {/** TODO POST ID */}
    </div>
  );
});
