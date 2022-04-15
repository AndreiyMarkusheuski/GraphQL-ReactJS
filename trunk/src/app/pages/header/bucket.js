import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

import Popup from "../../components/popup";
import CustomNavLink from "../../components/nav-link";
import OrdersList from "../../components/orders-list";

import { CurrencyContext } from "../../context/currency";

import { getPricesSum } from "../../helpers";

import bucket from "../../../assets/images/svg/bucket.svg";

const Bucket = () => {
  const store = useSelector((state) => state);
  const { currentCurrency } = useContext(CurrencyContext);
  const [isPopupActive, setStatusPopup] = useState(false);

  return (
    <div className="bucket">
      <div
        className="bucket__button"
        onClick={() => {
          setStatusPopup(!isPopupActive);
        }}
      >
        <img className="bucket__button_img" src={bucket} alt="bucket" />
        {store.length > 0 && (
          <span className="bucket__button_status">{store.length}</span>
        )}
      </div>
      {isPopupActive && (
        <Popup
          handleHide={() => setStatusPopup(!isPopupActive)}
          options={`${isPopupActive ? "active" : ""} right top`}
        >
          <div className="popup__bag">
            <span>My Bag,</span>
            <span className="bag_number">
              {store.length} {store.length < 2 ? "item" : "items"}
            </span>
          </div>
          <OrdersList orders={store}/>
          {store.length > 0 && (
            <div className="popup__price">
              <span>Total</span>
              <span>{getPricesSum(store, currentCurrency)}</span>
            </div>
          )}
          <div className="popup__btns">
            <CustomNavLink
              title="View bag"
              path="/cart"
              classStyle="styledBtn --text-btn --border"
              handleClick={() => setStatusPopup(!isPopupActive)}
            />
            <CustomNavLink
              title="CHECK OUT"
              path="#"
              classStyle="styledBtn --text-btn --green"
              handleClick={() => setStatusPopup(!isPopupActive)}
            />
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Bucket;
