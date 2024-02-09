import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/CrownLogo";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <div className="logo-div">Logo</div> */}
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
