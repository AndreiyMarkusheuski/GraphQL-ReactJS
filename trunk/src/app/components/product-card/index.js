import React from "react";
import "./style.scss";

import bucket from "../../../assets/images/svg/bucket-white.svg";

const ProductCard = ({
  id,
  image_src,
  name,
  price,
  isActive,
  onBucketClick,
}) => (
  <div className={`card ${isActive}`}>
    <img className="card__image" src={image_src} alt={name} />
    <div
      className="card__bucket"
      onClick={(e) => {
        e.preventDefault();
        onBucketClick();
      }}
    >
      <img className="card_bucket" src={bucket} alt="bucket" />
    </div>
    <div>
      <h3 className="card__title">{name}</h3>
      <p className="card__price">{price}</p>
    </div>
  </div>
);

export default ProductCard;
