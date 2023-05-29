import { memo } from "react"
import { adsParams, useAdHome } from "../helpers"
import { Link } from "react-router-dom"
import '../styles/AdHome.css'

interface adProps {
  data: adsParams
}

export const AdHome = memo( ({data}: adProps) => {

  const {onAdd, getBought} = useAdHome(data)
  return (
    <article className="componentG ad container">
      <div className="row">
        <div className="col-12">
          <h4>{data.name}</h4>
          <Link title="Ver perfil" to={`/profile/${data.user.userID}`}>
            <h5>{data.user.name}</h5>
          </Link>
          <h5><b>$ {data.price}</b></h5>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <img className="imagePost" src={data.pic}
            alt="Imagen del anuncio" />
        </div>
      </div>

      <div className="row justify-content-center">
        <button onClick={() => onAdd()} className={`yellowButtonG comprarButtonAd col-11 ${getBought ? 'likedPost':''}`}>
          <img src="/icons/cart.png" width='25' height='25' alt='' /> Agregar al carrito
        </button>
      </div>
    </article>
  )
})
