import { memo } from "react"
import { CommentZone } from "./"
import "../styles/PostHome.css"
import { Link } from "react-router-dom"
import { postParams } from "../helpers"

interface postProps {
  data: postParams
}

export const PostHome = memo( ({data}: postProps) => {
  return (
    <article className="componentG post container-fluent">

      <div className="titlePost row">
        <div className="col-12 flexG">
          <Link title="Ver perfil" to={`/profile/${data.user.userID}`}>
            <img className="roundedImagesG" src={data.user.pic}
              alt="Foto de perfil" width='56' height='56'/>
          </Link>

          <div>
            <h2>{data.user.name}</h2>
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

      <div className="row g-0">
        <div className="col-12">
          <CommentZone id_post="" maxComentarios={5} datos={data}/>
        </div>
      </div>

    </article>
  )
})
