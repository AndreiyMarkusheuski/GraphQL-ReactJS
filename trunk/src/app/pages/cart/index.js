import React from "react";
import "./style.scss";

import { useSelector } from "react-redux";

import OrdersList from "../../components/orders-list";

const Cart = ({ title }) => {
  const orders = useSelector((store) => store);
  return (
    <div className="cart">
      <div className="container">
        <h1>{title}</h1>
        {orders.length > 0 && <OrdersList orders={orders} isDisplayAll/>}
      </div>
    </div>
  );
};

export default Cart;
