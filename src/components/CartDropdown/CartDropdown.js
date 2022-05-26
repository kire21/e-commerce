import Button from "../Button/Button";

import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart__dropdown--container">
      <div className="cart__items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
