import React from "react";
import Cart from "./cart";
import { Routes, Route } from "react-router-dom";
import Category from "./category";
import Product from "./pdp";
import Header from "../components/Header/";

const Main = () => (
  <div className="App">
    <Header/>
    <Routes>
      <Route path="/category/:filter" element={<Category title={"Category"} />} />
      <Route path="/tech" element={<Product title={"Product"} />} />
      <Route path="/clothes" element={<Cart title={"Cart"} />} />
    </Routes>
  </div>
);

export default Main;
