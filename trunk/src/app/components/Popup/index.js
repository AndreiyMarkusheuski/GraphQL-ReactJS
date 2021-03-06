import React from "react";
import "./style.scss";

const Popup = ({ children, options, handleHide }) => (
  <div className={`popup ${options}`}>
    {children}
    <div onClick={handleHide} className="popup__hide"></div>
  </div>
);

export default Popup;
