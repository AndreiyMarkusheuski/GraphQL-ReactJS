import React, { useCallback, useState } from "react";
import { getCookie } from "../helpers";

export const OrdersContext = React.createContext({
    orders: []
})

export const OrdersProvider = ({children}) => {
    const cookiesOrders = getCookie('orders') || []
    const [orders, setOrdersy] = useState(cookiesOrders);
    const handleChangeOrders = useCallback(({items, operation}) => {
        setOrdersy(newCurrency)
        document.cookie = `orders=${newCurrency}`; 
    }, [orders]);

    return (
        <CurrencyContext.Provider value={{orders, handleChangeOrders}}>
            {children}
        </CurrencyContext.Provider>
    )
};