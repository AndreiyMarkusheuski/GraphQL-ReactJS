import React from "react";
import "./style.scss";

const Attributes = ({ attributes, handleClick }) => {
  if (attributes.lenght < 1) return null;

  return (
    <div className='attributes'>
      {attributes.map(({ id, name, type, items }) => (
        <div className="attribute" key={id}>
          <h2 className="attribute_header">{name}</h2>
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
      ))}
    </div>
  );
};

export default Attributes;
