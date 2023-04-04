import { memo, useState } from "react";
import { Comment } from "./";
import "../styles/PostHome.css"
import { Link } from "react-router-dom";

export const PostHome = memo( () => {
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

      <img className="imagePost" src='/placeholders/placeholder-posts.png' alt="Imagen de la publicación" width='850' height='530'/>

      <div className="likeSectionPost">

        <button className="yellowButtonG" type="button" onClick={() => setLikes((x) => x + 1)}>
          <img src="/icons/love.png" width='20' height='20' alt='' />
          {getLikes}
        </button>

        <input 
          className="yellowInputTextG"
          type='text'
          placeholder='Deja un comentario...'/>
      </div>

      <div className="comentariosPost">
        <Comment nombre="Anacleto perrito" texto="Que lindooooo"/>
        <Comment nombre="Aurelio el gato" texto="Precioso"/>
        <Comment nombre="Matru" texto="Muchas gracias por sus comentarios"/>
        <Comment nombre="Aurelio" texto="Que lindooooo"/>
        <Comment nombre="Aurelio" texto="Que lindooooo"/>
        <br/>
      </div>
    </div>
  );
});
