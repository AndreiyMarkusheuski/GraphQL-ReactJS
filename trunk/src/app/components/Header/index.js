import React from "react";
import CustomNavLink from "../UI/nav-link";
import Currency from "./currency";
import "./style.scss";
import logo from "../../../assets/images/svg/brand-icon.svg";
import bucket from "../../../assets/images/svg/bucket.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <nav className="nav">
            <CustomNavLink title="Category" path="/"/>
            <CustomNavLink title="Product" path="/product/1"/>
            <CustomNavLink title="Card" path="/card"/>
          </nav>
        </div>
        <div className="header-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="header-currency">
          <Currency/>
          <CustomNavLink title="Card" path="/card">
          <img className="currency_bucket" src={bucket} alt="bucket" />
          </CustomNavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
