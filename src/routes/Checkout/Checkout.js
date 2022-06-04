import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <span onClick={() => removeItemFromCart(cartItem)}>
                decrament
              </span>
              <span>{cartItem.quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}>incrament</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
