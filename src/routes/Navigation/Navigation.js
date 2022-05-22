import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/Firebase";

import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {/* <Link className="nav__link" to="/auth">
            SIGN IN
          </Link> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
