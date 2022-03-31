import React from "react";

import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  transition: all 0.5s ease;
  outline: none;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &.active:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &.disable {
    opacity: 0.4;
    cursor: default;
  }

  .card_image {
    object-fit: contain;
    width: 100%;
    height: 350px;
  }
`;

export const imgStyle = styled.img``;

const Card = ({ image_src, name, price, isActive }) => (
  <CardStyled className={`card ${isActive}`}>
    <img className="card_image" src={image_src} alt={name} />
    <div>
      <h3 className="card_title">{name}</h3>
      <p className="card_price">{price}</p>
    </div>
  </CardStyled>
);

export default Card;
