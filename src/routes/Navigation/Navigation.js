import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

import { signOutUser } from "../../utils/firebase/Firebase";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo__container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav__links--container">
          <Link className="nav__link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav__link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav__link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
