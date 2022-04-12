import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCY } from "../../helpers/graphql-requests";

import { CurrencyContext } from "../../context/currency";
import Lists from "../../components/UI/lists";
import Popup from '../../components/popup'

import arrow from "../../../assets/images/svg/arrow.svg";

const Currency = () => {
  const [isPopupActive, setStatusPopup] = useState(false);
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
      className={`currency dropdown ${isPopupActive ? "active" : ""} `}
      onClick={() => setStatusPopup(!isPopupActive)}
    >
      <div className="currency__current-status">
        <p className="currency__text">{currentCurrency}</p>
        <img className="currency__arrow" src={arrow} alt="arrow" />
      </div>
      {currency && (
        <Popup options={`${isPopupActive ? "active" : ""} left top`}>
          <Lists data={currency} handleChange={handleChangeCurrency} />
        </Popup>
      )}
    </div>
  );
};

export default Currency;
