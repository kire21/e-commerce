import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cartIcon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart__icon--container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping__icon" />
      <span className="item__count">0</span>
    </div>
  );
};

export default CartIcon;
