import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCY } from "../../helpers/graphql-requests";

import { CurrencyContext } from '../../context'
import Dropdown from "../UI/dropdown";

import arrow from "../../../assets/images/svg/arrow.svg";

const Currency = () => {
    const [isActiveDropdown, setDropdownStatus] = useState(false);
    const [a, b] = useState(false);
    const { loading, error, data } = useQuery(GET_CURRENCY, { 
        onCompleted: () => {
            const {currencies} = data;
            b(currencies)
        }
    });
    const { currentCurrency, handleChangeCurrency } = useContext(CurrencyContext);

    return (
        <div className={`currency dropdown-${isActiveDropdown ? 'active':'disable'} `} onClick={() => setDropdownStatus(!isActiveDropdown)}>
            <p>{currentCurrency}</p>
            <img src={arrow} alt='arrow'/>
            {a && (<Dropdown data={a} handleChange={handleChangeCurrency}/>)}
        </div>
    )    
}

export default Currency;
