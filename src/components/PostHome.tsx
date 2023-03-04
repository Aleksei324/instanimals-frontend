import { useState } from "react";
import { CommentsHome } from "./";
import "../styles/PostHome.css"

export const PostHome = () => {
  const [getFotoPerfil, setFotoPerfil] = ['/placeholders/placeholder-posts.png', ''] //TODO
  const [getLikes, setLikes] = useState(455) //TODO

  return (
    <div className="post">
      <div className="componentG">
        <div className="titlePost">
          <img className="roundedImagesG" src={getFotoPerfil} alt="Foto de perfil" width='56' height='56'/>
          <p><b>Matru husky:</b> Cortecito pal rey</p>
        </div>

        <img className="imagePost" src='/placeholders/placeholder-posts.png' alt="Imagen de la publicación" width='850' height='530'/>

        <div className="likeSectionPost">
          <button className="yellowButtonG" type="button" onClick={() => setLikes((x) => x + 1)}><img src="/icons/like.png"></img> {getLikes}</button>
          <input 
            className="yellowInputTextG"
            type='text'
            placeholder='Deja un comentario...'/>
        </div>
      </div>

      <div className="comentariosPost">
        <h2>Comentarios recientes</h2>
        <CommentsHome nombre="Anacleto perrito" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio el gato" texto="Precioso"/>
        <CommentsHome nombre="Matru" texto="Muchas gracias por sus comentarios"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
        <CommentsHome nombre="Aurelio" texto="Que lindooooo"/>
      </div>
    </div>
  );
};
