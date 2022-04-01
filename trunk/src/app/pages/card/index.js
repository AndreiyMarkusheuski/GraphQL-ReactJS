import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const Card = ({ title }) => {
    const params = useParams();
    // console.log(params)
    return <>{title}</>
}

export default Card;
