import React from "react";
import './style.scss'

const Popup = ({children, options}) => {
    return <div className={`popup ${options}`}>{children}</div>
}

export default Popup