import React from "react";

const Attributes = ({ attributes, handleClick }) => {
  if (attributes.lenght < 1) return null;

  return attributes.map(({ id, name, type, items }) => {
    return (
      <div key={id}>
        <h2>{name}</h2>
        {items.map(({ id, displayValue, value, isSelected }) => (
          <button
            className={`styledBtn m-r-5 ${
              type === "swatch" ? "--square" : "--border"
            } ${isSelected ? "selected" : "no-selected"}`}
            key={id}
            value={value}
            style={{ background: `${type === "swatch" ? value : "#ffffff"}` }}
            onClick={() => handleClick(name, id)}
          >
            {type !== "swatch" ? displayValue : ""}
          </button>
        ))}
      </div>
    );
  });
};

export default Attributes;
