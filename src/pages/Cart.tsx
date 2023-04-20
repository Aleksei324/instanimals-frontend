import { Layout } from "../components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantityCart, removeFromCart, removeAllFromCart, cartInterface } from "../store/userSlice";
import { Footer, Pago, Popup } from "../components";
import '../styles/cart.css';
import { Key } from "react";

export const Cart = () => {
  const [getEditarPago, setEditarPago] = useState(false);
  const [getEditarUbicacion, setEditarUbicacion] = useState(false);
  const cart = useSelector((state: any) => state.userSlice.cart);
  const dispatch = useDispatch();

  const productos = [
  { id: "1", precio: 15000, nombre: 'Juguete para gato tipo pez' },
  { id: "2", precio: 11000, nombre: 'Comida para gato marca adult' },
  { id: "3", precio: 9000, nombre: 'Collar para perro' },
  { id: "4", precio: 16000, nombre: 'Alimento vegetariano para gatitos'  }]

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
      <h1>Izquierda</h1>
      <div>
        metodo de pago
        <button onClick={() => setEditarPago(true)}>editar</button>
      </div>
      <div>
        ubicación
        <button onClick={() => setEditarUbicacion(true)}>editar</button>
      </div>
      <div>
      <span>Envío: ${(total * 0.05).toFixed(2)}</span>

        <br/>
        Total: {total}
        <br/>
        <button onClick={() => console.log('comprar')}>comprar</button>
      </div>

      <div className="cart">
        <h1>Derecha</h1>
        <ul>
        <button onClick={() => dispatch(removeAllFromCart())}>Remover todos los items</button>
        <div className="componenteG">
          {generarProducto().map((item: any, key: Key) => (
            <li key={key}>
              <span>{item.nombre}</span>
              <span> ${item.precio}</span>
              <button onClick={() => dispatch(changeQuantityCart({ id: item.id, aumenta: false }))}>-</button>
              <span>{item.cant}</span>
              
              <button onClick={() => dispatch(changeQuantityCart({ id: item.id, aumenta: true }))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
            </li>
            
          ))}
          </div>
        </ul>
        
        </div>
        
      </div>
    </Layout>
  );
};
