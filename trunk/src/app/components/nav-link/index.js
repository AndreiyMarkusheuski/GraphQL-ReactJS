import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ title, path, children, classStyle, handleClick }) => (
  <NavLink
    className={(isActive) =>
      `nav-link ${classStyle} ${isActive ? "active" : ""}`
    }
    to={path}
    onClick={handleClick}
  >
    {children ? children : title}
  </NavLink>
);

export default CustomNavLink;
