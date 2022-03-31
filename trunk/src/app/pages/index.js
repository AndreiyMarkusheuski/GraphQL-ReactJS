import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Card from "./card";
import Category from "./category";
import Product from "./pdp";

const Main = () => (
  <div className="App">
    <nav>
      <a href='/'>a</a>
      <Link to="/">Category</Link>
      <Link to="/product/1">Product</Link>
      <Link to="/card">Card</Link>
    </nav>
    <h1>Test run</h1>
    <Routes>
      <Route path="/" element={<Category title={"Category"} />} />
      <Route path="/product/:id" element={<Product title={"Product"} />} />
      <Route path="/card" element={<Card title={"Card"} />} />
    </Routes>
  </div>
);

export default Main;
