import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCY } from "../../helpers/graphql-requests";

import { CurrencyContext } from "../../context";
import Dropdown from "../UI/dropdown";
import Popup from "../Popup";

import arrow from "../../../assets/images/svg/arrow.svg";

const Currency = () => {
  const [isActiveDropdown, setDropdownStatus] = useState(false);
  const [currency, setCurrency] = useState(false);
  const { loading, error, data } = useQuery(GET_CURRENCY, {
    onCompleted: () => {
      const { currencies } = data;
      setCurrency(currencies);
    },
  });
  const { currentCurrency, handleChangeCurrency } = useContext(CurrencyContext);

  return (
    <div
      className={`currency dropdown ${isActiveDropdown ? "active" : ""} `}
      onClick={() => setDropdownStatus(!isActiveDropdown)}
    >
      <div className="currency__current-status">
        <p className="currency__text">{currentCurrency}</p>
        <img className="currency__arrow" src={arrow} alt="arrow" />
      </div>
      {currency && (
        <Popup options={`${isActiveDropdown ? "active" : ""} left top`}>
          <Dropdown data={currency} handleChange={handleChangeCurrency} />
        </Popup>
      )}
    </div>
  );
};

export default Currency;
