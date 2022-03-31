import React, { useCallback, useState } from "react";

export const CurrencyContext = React.createContext({
    currentCurrency: 'USD'
})

export const CurrencyProvider = ({children}) => {
    const [currentCurrency, setCurrentCurrency] = useState("USD");
    const handleChangeCurrency = useCallback((newCurrency) => {
        setCurrentCurrency(newCurrency)
    }, [currentCurrency]);

    return (
        <CurrencyContext.Provider value={{currentCurrency, handleChangeCurrency}}>
            {children}
        </CurrencyContext.Provider>
    )
};