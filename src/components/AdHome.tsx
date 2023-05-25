import { memo } from "react";
import { adsParams } from "../helpers";

interface adProps {
  data: adsParams
}

export const AdHome = memo( ({data}: adProps) => {
  return (
    <div className="componentG">
      <div>
        {data.name}<br/>
        {data.user.name}<br/>
        {data.price}
      </div>

      <div>
        <img className="imagePost" src={data.pic}
          alt="Imagen de la publicación" width='300' />
      </div>
      
      <div>
        <button className="yellowButtonG">
          <img src="/icons/cart.png" width='25' height='25' alt='' />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
});
