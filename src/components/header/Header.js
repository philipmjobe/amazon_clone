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
          <div className="header__nav">
            <Link to="/login" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Link>
          </div>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* shopping basket icon */}
              <ShoppingBasketIcon />
              {/*number of items in the basket */}
              {/* we use {basket?.length} to render the length of the basket when basket property of the state reaches the header component without this the dom will render the basket.length even when it has not reached the header compnent therby resulting to an error */}
              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </Link>
    </nav>
  );
}
export default Header;
