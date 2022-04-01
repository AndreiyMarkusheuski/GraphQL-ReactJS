import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../helpers/graphql-requests";

const Product = ({ title }) => {
    const {id} = useParams();
    const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
        variables: { id },
      });
    console.log(data)
    return (
        <>{title} with id: {id}</>
    )
};

export default Product;
 