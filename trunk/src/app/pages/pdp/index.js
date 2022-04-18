import React, { useState, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addOrderMiddleware } from "../../Redux/middlewares";

import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../graphql-requests";

import Loader from "../../components/loader";
import Attributes from "../../components/attributes";

import { getPrice } from "../../helpers";

import { CurrencyContext } from "../../context/currency";

import { updateAttributes } from "../../helpers";

import "./style.scss";

const Product = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store);

  const { id } = useParams();

  const [currentImgSrc, setCurrentImgSrc] = useState("");
  const [product, setProduct] = useState(false);

  const { currentCurrency } = useContext(CurrencyContext);

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  useEffect(() => {
    if (!loading && !error && !product) {
      setProduct(data.product);
      setCurrentImgSrc(data.product.gallery[0]);
    }
  }, [data]);

  if (product) {
    const { id, name, brand, prices, description, gallery, attributes } =
      product;

    return (
      <div className="product" data-product-id={id}>
        <div className="container">
          <div className="product_block">
            <div className="product_images">
              <div className="images_container">
                {gallery.map((item, index) => (
                  <img
                    onClick={() => setCurrentImgSrc(item)}
                    src={item}
                    key={index}
                    alt={name}
                  />
                ))}
              </div>
              <div className="images_main">
                <img src={currentImgSrc} alt={name} />
              </div>
            </div>
            <div className="product_describe">
              <h2 className="describe_brand">{brand}</h2>
              <h3 className="describe_name">{name}</h3>
              <Attributes
                attributes={attributes}
                handleClick={(attributeSet, attribute) =>
                  setProduct(
                    updateAttributes(
                      product,
                      attributes,
                      attributeSet,
                      attribute
                    )
                  )
                }
              />
              <p className="describe_price">
                Prise: <br />
                <span>{getPrice(prices, currentCurrency)}</span>
              </p>
              <button
                className="describe_button"
                onClick={() => {
                  let order = { ...product, count: 1 };
                  dispatch(addOrderMiddleware(orders, order));
                }}
              >
                add to cart
              </button>
              <div
                className="describe_text"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else return <Loader />;
};

export default Product;
