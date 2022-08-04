import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../stateProvider/StateProvider";
import { auth } from "firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();
  const login = () => {
    if (user) {
      auth().signout();
      history.push("/login");
    }
  };
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        {/* search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__SearchIcon" />
        </div>
        {/* 3 links */}
        <div clssName="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </Link>
          <div className="header__nav">
            <Link to="/order" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </nav>
  );
}
