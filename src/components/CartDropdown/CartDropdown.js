import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart__dropdown--container">
      <div className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
