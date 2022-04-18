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
import SwiperCarusel from "../swiper";

import { getPrice } from "../../helpers";

const OrdersList = ({ orders, isDisplayAll }) => {
  const dispatch = useDispatch();
  const { currentCurrency } = useContext(CurrencyContext);

  return (
    <ul className='list__orders'>
      {orders.map(({ id, name, prices, count, gallery, brand, attributes }) => (
        <li key={id} className="item">
          <div className="item_description">
            <div className="description">
              <h2 className="brand">{brand}</h2>
              <h3 className="name">{name}</h3>
            </div>
            <div className='price'>
              <p>{getPrice(prices, currentCurrency)}</p>
            </div>
            {isDisplayAll && <Attributes
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
            />}
          </div>
          <div className="item_container">
            <div className="controls">
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
            <SwiperCarusel items={gallery} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
