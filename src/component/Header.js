import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      {/* logo on left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header_serchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links  */}
      <div className="header__nav">
        {/* { 1st link } */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, </span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* { 2nd link } */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>
        {/* { 3rd link } */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket Icon with number */}

      <Link to="/checkout" className="header__link">
        <div className="header_optionBasket">
          {/* shopping basket item;  */}
          <ShoppingBasketIcon className="" />
          {/* Number of item in the basket */}
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
