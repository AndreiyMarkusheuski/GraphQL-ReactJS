import React from "react";
import Card from "./card";
import { Routes, Route } from "react-router-dom";
import Category from "./category";
import Product from "./pdp";
import Header from "../components/Header/";

const Main = () => (
  <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Category title={"Category"} />} />
      <Route path="/product/:id" element={<Product title={"Product"} />} />
      <Route path="/card" element={<Card title={"Card"} />} />
    </Routes>
  </div>
);

export default Main;
