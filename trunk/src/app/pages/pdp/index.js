import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const Product = ({ title }) => {
    const {id} = useParams();
    return (
        <>{title} with id: {id}</>
    )
};

export default Product;
 