import * as actions from "./actions";
import { setLocalStorage } from "../helpers";

export const addOrderMiddleware = (state, value) => async (dispatch) => {
  const copyState = [...state];
  if (copyState.filter(({ id }) => id === value.id).length > 0) return null;
  setLocalStorage("orders", [...copyState, value]);
  dispatch(actions.ADD_ONE_ORDER(value));
};

export const addOneMore = (state, id) => async (dispatch) => {
  const copyState = [...state];
  const upd = copyState.map((item) =>
    item.id === id ? { ...item, count: item.count + 1 } : item
  );
  setLocalStorage("orders", upd);
  dispatch(actions.UPDATE_ORDERS(upd));
};

export const removeOneMore = (state, id) => async (dispatch) => {
  const copyState = [...state];
  const upd = copyState
    .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
    .filter((item) => item.count > 0);
  setLocalStorage("orders", upd);
  dispatch(actions.UPDATE_ORDERS(upd));
};

export const updateAttributes =
  (id, attributes, attributeSet, attribute) => async (dispatch) => {
    const copyState = [...state];

    const updatedAttrs = attributes.map((attr) => {
      const updated = { ...attr };
      if (attr.id === attributeSet) {
        const parsedAttr = attr.items.map((elem) => ({
          ...elem,
          isSelected: elem.id === attribute,
        }));
        updated.items = parsedAttr;
      }
      return updated;
    });

    const upd = copyState.map((items) =>
      items.id === id ? { ...items, attributes: updatedAttrs } : items
    );

    setLocalStorage("orders", upd);
    dispatch(actions.UPDATE_ORDERS(upd));
  };
