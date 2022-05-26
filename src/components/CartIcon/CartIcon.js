import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart__icon--container">
      <ShoppingIcon className="shopping__icon" />
      <span className="item__count">0</span>
    </div>
  );
};

export default CartIcon;
