import React from "react";

const Dropdown = ({ data, handleChange }) => {
  return (
    <ul>
      {data.map(({ label, symbol }) => {
        return <li>{symbol}</li>;
      })}
    </ul>
  );
};

export default Dropdown;
