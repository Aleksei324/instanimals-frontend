import { Layout } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  changeQuantityCart,
  removeFromCart,
  removeAllFromCart,
  addToCart,
} from "../store/userSlice";
import '../styles/cart.css';

interface cartInterface {
  id: string;
  cant: number;
}

export const Cart = () => {
  const cart = useSelector((state: any) => state.userSlice.cart);
  const dispatch = useDispatch();

  const handleAdd = (id: string) => {
    dispatch(changeQuantityCart({ id, cant: 1 }));
  };

  const handleRemove = (id: string) => {
    const item = cart.find((item: cartInterface) => item.id === id);
    if (item && item.cant > 1) {
      dispatch(changeQuantityCart({ idObjeto: id, nuevaCant: -1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemoveAll = () => {
    dispatch(removeAllFromCart());
  };

  return (
    <Layout>
      <div className="general">
      
      <div className="cart">
        <h1>Derecha</h1>
        <ul>
        <button onClick={handleRemoveAll}>Remover todos los items</button>
          {cart.map((item: cartInterface) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <button onClick={() => handleRemove(item.id)}>-</button>
              <span>{item.cant}</span>
              <button onClick={() => handleAdd(item.id)}>+</button>
            </li>
          ))}
        </ul>
        
        </div>
        
      </div>
    </Layout>
  );
};
