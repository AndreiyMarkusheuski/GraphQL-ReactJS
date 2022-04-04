import React, { useCallback, useState } from "react";
import { getCookie } from "../helpers";

export const CurrencyContext = React.createContext({
    currentCurrency: 'USD'
})

export const CurrencyProvider = ({children}) => {
    const cookiesCurrency = getCookie('currency') || '$'
    const [currentCurrency, setCurrentCurrency] = useState(cookiesCurrency);
    const handleChangeCurrency = useCallback((newCurrency) => {
        setCurrentCurrency(newCurrency)
        document.cookie = `currency=${newCurrency}`; 
    }, [currentCurrency]);

    return (
        <CurrencyContext.Provider value={{currentCurrency, handleChangeCurrency}}>
            {children}
        </CurrencyContext.Provider>
    )
};