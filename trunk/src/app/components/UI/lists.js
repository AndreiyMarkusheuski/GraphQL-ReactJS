import React from "react";

const Lists = ({ data, handleChange }) => {
  return (
    <ul className="lists">
      {data.map(({ label, symbol }) => {
        return (
          <li key={symbol} className="lists__item" onClick={() => handleChange(symbol)}>
            <span>{symbol}</span>&nbsp;<span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Lists;
