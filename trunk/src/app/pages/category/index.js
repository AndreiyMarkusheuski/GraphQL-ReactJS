import React, { useContext, useReducer } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../../context/currency";
import { GET_PRODUCTS_BY_CATEGORIGY } from "../../helpers/graphql-requests";
import { getPrice } from "../../helpers/index";

import Card from "../../components/card";
import Loader from "../../components/UI/loader";

import { useDispatch, useSelector } from "react-redux";
import { addOrderMiddleware } from "../../Redux/middlewares";

import { Grid, StyledLink, StyledDisableCard } from "./styled-component";

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
          <Grid>
            {data.category.products.map(
              ({ id, gallery, name, inStock, prices, description, brand, attributes }, index) => (
                <StyledLink
                  to={`/product/${id}`}
                  className={inStock ? "active" : "disable"}
                  key={index}
                >
                  <Card
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
                          attributes
                        })
                      );
                    }}
                  />
                  {!inStock && (
                    <StyledDisableCard className="card-disable">
                      <p>out of stock</p>
                    </StyledDisableCard>
                  )}
                </StyledLink>
              )
            )}
          </Grid>
        </div>
      </div>
    );
  } else return <Loader />;
};

export default Category;
