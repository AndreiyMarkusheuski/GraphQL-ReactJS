import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ title, path, children }) => (
  <NavLink
    className={(isActive) => `nav-link" ${isActive ? "active" : ""}`}
    to={path}
  >
    {children ? children : title}
  </NavLink>
);

export default CustomNavLink;
