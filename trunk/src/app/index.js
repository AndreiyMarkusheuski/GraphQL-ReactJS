import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Main from "./pages";
import { CurrencyProvider } from "./context";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CurrencyProvider>
        <Main />
      </CurrencyProvider>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
