import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout__container">
      <div className="checkout__header">
        <div className="header__block">
          <span>Product</span>
        </div>
        <div className="header__block">
          <span>Description</span>
        </div>
        <div className="header__block">
          <span>Quantity</span>
        </div>
        <div className="header__block">
          <span>Price</span>
        </div>
        <div className="header__block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} />;
      })}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
