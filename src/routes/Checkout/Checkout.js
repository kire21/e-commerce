import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <span>decrament</span>
              <span>{item.quantity}</span>
              <span onClick={() => addItemToCart(item)}>incrament</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
