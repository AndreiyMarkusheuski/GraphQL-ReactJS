import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../../context";
import { GET_PRODUCTS_BY_CATEGORIGY } from "../../helpers/graphql-requests";
import { getPrice } from "../../helpers/index";

import Card from "../../components/Card";
import Loader from "../../components/UI/loader";

import { Grid, StyledLink, StyledDisableCard } from "./styled-component";

const Category = () => {
  const { filter } = useParams();
  const { currentCurrency } = useContext(CurrencyContext);
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORIGY, {
    variables: { filter },
  });

  console.log(data);

  if (!loading && !error && data) {
    return (
      <div className="category">
        <div className="container">
          <h1>Category name</h1>
          <Grid>
            {data.category.products.map(
              ({ id, gallery, name, inStock, prices }, index) => (
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
