import React, { useContext } from "react";
import "./style.scss";

import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addOrderMiddleware } from "../../Redux/middlewares";

import { GET_PRODUCTS_BY_CATEGORIGY } from "../../graphql-requests";
import { getPrice } from "../../helpers";

import ProductCard from "../../components/product-card";
import Loader from "../../components/loader";

import { CurrencyContext } from "../../context/currency";

const Category = ({ title }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state);
  const { filter } = useParams();
  const { currentCurrency } = useContext(CurrencyContext);
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORIGY, {
    variables: { filter },
  });

  if (!loading && !error && data) {
    return (
      <div className="category">
        <div className="container">
          <h1>{title}</h1>
          <div className="category_content">
            {data.category.products.map(
              ({
                id,
                gallery,
                name,
                inStock,
                prices,
                description,
                brand,
                attributes,
              }) => (
                <Link
                  to={`/product/${id}`}
                  className={`category_product__link ${
                    inStock ? "active" : "disable"
                  }`}
                  key={id}
                >
                  <ProductCard
                    id={id}
                    image_src={gallery[0]}
                    name={name}
                    price={getPrice(prices, currentCurrency)}
                    isActive={inStock ? "active" : "disable"}
                    onBucketClick={() => {
                      dispatch(
                        addOrderMiddleware(orders, {
                          id,
                          name,
                          prices,
                          gallery,
                          count: 1,
                          description,
                          brand,
                          attributes,
                        })
                      );
                    }}
                  />
                  {!inStock && (
                    <div className="category_card-disable">
                      <p>out of stock</p>
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    );
  } else return <Loader />;
};

export default Category;
