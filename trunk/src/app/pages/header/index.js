import React from "react";
import Currency from "./currency";
import Bucket from "./bucket";
import Nav from "./nav";

import "./style.scss";
import logo from "../../../assets/images/svg/brand-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <Nav/>
        </div>
        <div className="header-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="header-currency">
          <Currency/>
          <Bucket />
        </div>
      </div>
    </header>
  );
};

export default Header;
