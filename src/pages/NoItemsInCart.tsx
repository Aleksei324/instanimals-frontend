import { Link } from "react-router-dom"

export const NoItemsInCart = () => {
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Primero debe llenar su carrito de compras, por favor</h1>
      <Link to='/home'>Volver al inicio</Link>
    </>
  )
};
