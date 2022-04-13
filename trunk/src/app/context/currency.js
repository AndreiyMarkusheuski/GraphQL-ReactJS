import React, { useCallback, useState } from "react";
import { getCookie, setCookies } from "../helpers";

export const CurrencyContext = React.createContext({
  currentCurrency: "",
});

export const CurrencyProvider = ({ children }) => {
  const cookiesCurrency = getCookie("currency").replaceAll('"', "") || "$";
  const [currentCurrency, setCurrentCurrency] = useState(cookiesCurrency);
  const handleChangeCurrency = useCallback(
    (newCurrency) => {
      setCurrentCurrency(newCurrency);
      setCookies("currency", newCurrency);
    },
    [currentCurrency]
  );

  return (
    <CurrencyContext.Provider value={{ currentCurrency, handleChangeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
