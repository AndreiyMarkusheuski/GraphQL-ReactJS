import React from "react";
import Cart from "./cart";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import Category from "./category";
import Product from "./pdp";
import Header from "./header";
import store from "../Redux/store";

const Main = () => (
  <Provider store={store} className="App">
    <Header />
    <Routes>
      <Route
        path="/category/:filter"
        element={<Category title={"Category name"} />}
      />
      <Route path="/tech" element={<Product title={"Product"} />} />
      <Route path="/cart" element={<Cart title={"Cart"} />} />
      <Route
        path="*"
        element={<Navigate to='/category/all' replace/>}
      />
    </Routes>
  </Provider>
);

export default Main;
