import React from "react";
import { useSelector } from "react-redux";
import List from "../../components/list";
import "./style.scss";

const Cart = ({ title }) => {
  const orders = useSelector((store) => store);
  return (
    <div className="cart">
      <div className="container">
        <h1>{title}</h1>
        {orders.length > 0 && <List orders={orders} />}
      </div>
    </div>
  );
};

export default Cart;
