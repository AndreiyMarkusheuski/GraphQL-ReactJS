import React, { useContext } from "react";
import "./style.scss";

import { useDispatch } from "react-redux";
import { CurrencyContext } from "../../context/currency";
import {
  addOneMore,
  removeOneMore,
  updateAttributes,
} from "../../Redux/middlewares";

import Attributes from "../attributes";

import { getPrice } from "../../helpers";

const OrdersList = ({ orders, options }) => {
  const dispatch = useDispatch();
  const { currentCurrency } = useContext(CurrencyContext);

  return (
    <ul className={`list__orders ${options}`}>
      {orders.map(({ id, name, prices, count, gallery, brand, attributes }) => (
        <li key={id} className="item">
          <div className="item_description">
            <div className="item_description__text">
              <h2 className="brand">{brand}</h2>
              <h3 className="name">{name}</h3>
              <p className="price">{getPrice(prices, currentCurrency)}</p>
            </div>
            <Attributes
              attributes={attributes}
              handleClick={(attributeSet, attribute) =>
                dispatch(
                  updateAttributes(
                    orders,
                    id,
                    attributes,
                    attributeSet,
                    attribute
                  )
                )
              }
            />
          </div>
          <div className="item_btns">
            <button
              className="styledBtn --square --border"
              onClick={() => dispatch(addOneMore(orders, id))}
            >
              +
            </button>
            <p>{count}</p>
            <button
              className="styledBtn --square --border"
              onClick={() => dispatch(removeOneMore(orders, id))}
            >
              -
            </button>
          </div>
          <div className="item_img">
            {/* Add swiper */}
            <img src={gallery[0]} alt={name} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
