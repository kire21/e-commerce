import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo__container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav__links--container">
          <Link className="nav__link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
