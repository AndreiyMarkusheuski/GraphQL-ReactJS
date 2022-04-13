import React from "react";
import "./style.scss";

const CurrencyList = ({ data, handleChange }) => (
  <ul className="currency-list">
    {data.map(({ label, symbol }) => (
      <li
        key={symbol}
        className="currency-list__item"
        onClick={() => handleChange(symbol)}
      >
        <span>{symbol}</span>&nbsp;<span>{label}</span>
      </li>
    ))}
  </ul>
);

export default CurrencyList;
