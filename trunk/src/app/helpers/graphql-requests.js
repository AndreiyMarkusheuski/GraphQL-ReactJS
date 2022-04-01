import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    categories {
      products {
        id
        name
        inStock
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        gallery
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query ($id: String!) {
    product(id: $id) {
      id
      name
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      gallery
      description
    }
  }
`;

export const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
