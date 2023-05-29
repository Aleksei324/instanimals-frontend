import { Link } from "react-router-dom"

export const NoItemsInCart = () => {
  return (
    <>
      <h1 className="notFoundG">Primero debe llenar su carrito de compras, por favor</h1>
      <Link to='/home'><h2>Entendido</h2></Link>
    </>
  )
}
