import { useState, Key } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantityCart, removeFromCart, removeAllFromCart, cartInterface } from "../store/userSlice";
import { Layout, Pago, Popup } from "../components";
import '../styles/cart.css';
import '../styles/Login.css';

export const Cart = () => {
  const [getEditarPago, setEditarPago] = useState(false);
  const [getEditarUbicacion, setEditarUbicacion] = useState(false);
  const cart = useSelector((state: any) => state.userSlice.cart);
  const dispatch = useDispatch();

  const productos = [
  { id: "1", precio: 15000, nombre: 'Juguete para gato tipo pez', img: '/placeholders/placeholder-posts.png' },
  { id: "2", precio: 11000, nombre: 'Comida para gato marca adult', img: '/placeholders/placeholder-posts.png' },
  { id: "3", precio: 9000, nombre: 'Collar para perro', img: '/placeholders/placeholder-posts.png' },
  { id: "4", precio: 16000, nombre: 'Alimento vegetariano para gatitos', img: '/placeholders/placeholder-posts.png'  }]

  const generarProducto = () => {
    const productosEnCarrito = cart.map((item: cartInterface) => {
      const producto = productos.find((prod) => prod.id === item.id);
      return { ...producto, cant: item.cant };
    });
    return productosEnCarrito;
  }
  const total: number = cart.reduce((acc: number, curr: { id: string; cant: number; }) => {
    const precio = productos.find(producto => producto.id === curr.id)?.precio || 0;
    return acc + precio * curr.cant;
  }, 0);


  return (
    <Layout>
      
      <div className="pago">
      <Popup activation={getEditarPago} setActivation={setEditarPago}>
        <Pago tipo='metodoPago'/>
      </Popup>
      <Popup activation={getEditarUbicacion} setActivation={setEditarUbicacion}>
        <Pago tipo='ubicacion'/>
      </Popup>
      <div className="visibleCart">
      <div className="componenteG">
      <div className="cartSectionPost ">
      <div>
        <b>Metodo de pago</b>
        <br/>
        ***************54
        </div>
        <button className="yellowButtonG " onClick={() => setEditarPago(true)}>Editar</button>
      </div>
      <hr/>
      <div className="cartSectionPost ">
        <div>
        <b>Ubicación</b>
        <br/>
        Diagonal 12 #41-79A
        </div>
        
        <button className="yellowButtonG " onClick={() => setEditarUbicacion(true)}>Editar</button>
        
      </div>
      <hr/>
      <div>
      <span>Envío: ${(total * 0.05).toFixed(2)}</span>

        <br/>
        Total: ${total}
        <br/>
        <button className="yellowButtonG buttonLogin" onClick={() => console.log('comprar')}>Comprar</button>
      </div>
      </div>
      <div className="cart">
        <ul>
        <button className="redButtonCart" onClick={() => dispatch(removeAllFromCart())}>Remover todos los items</button>
        <div className=" ">
          <div className="componentLogin">
          {generarProducto().map((item: any, key: Key) => (
            <div key={key} className="componentG cartItem">
              <img className="iconLinksHeader" src={`${item.img}` } alt="Foto de perfil" width="100" height= "100"></img>
              <span>{item.nombre}</span>
              <span> ${item.precio}</span>
              <div className=  "cartReduce">
              <div className="yellowButtonCart ">
              <button className="cantidadCart" onClick={() => dispatch(changeQuantityCart({ id: item.id, aumenta: false }))}>-</button>
              <span>{item.cant}</span>
              
              <button className="cantidadCart" onClick={() => dispatch(changeQuantityCart({ id: item.id, aumenta: true }))}>+</button>
              </div>
              <button className="redButtonCart" onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
            </div>
            </div>
            
          ))}
          </div>
          </div>
        </ul>
        
        </div>
        
      </div>
      </div>
    </Layout>
  );
};
