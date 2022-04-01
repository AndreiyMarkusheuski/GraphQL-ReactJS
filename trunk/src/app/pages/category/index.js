import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../context";
import { GET_PRODUCTS } from "../../helpers/graphql-requests";
import { getPrice } from "../../helpers/index";

import Card from "../../components/UI/card";
import Loader from "../../components/UI/loader";

import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 100px 40px;
  grid-auto-flow: row;
  margin: 80px 100px 0;
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: #000;
  text-decoration: none;

  &.disable {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const StyledDisableCard = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 160%;
    color: #414248;
  }
`;

const Category = () => {
  const { currentCurrency } = useContext(CurrencyContext);
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (!loading && !error) {
    let arr = [];
    data.categories.map((item) => (arr = [...arr, ...item.products]));
    return (
      <Grid>
        {arr.map(({ id, gallery, name, inStock, prices }, index) => (
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
        ))}
      </Grid>
    );
  } else return <Loader />;
};

export default Category;
