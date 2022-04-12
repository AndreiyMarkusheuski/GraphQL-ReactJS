import React, { useContext, useState } from "react";
import CustomNavLink from "../../components/UI/nav-link";
import { useSelector } from "react-redux";
import { CurrencyContext } from "../../context/currency";
import { getPricesSum } from "../../helpers";
import Popup from "../../components/popup";
import bucket from "../../../assets/images/svg/bucket.svg";

import List from "../../components/list";

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
          <List orders={store}/>
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
