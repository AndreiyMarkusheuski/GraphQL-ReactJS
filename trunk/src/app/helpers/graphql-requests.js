import { gql, useQuery } from "@apollo/client";

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
