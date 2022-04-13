import * as actions from "./actionTypes";

export const ADD_ONE_ORDER = (value) => ({
  type: actions.ADD_ONE_ORDER,
  value,
});
export const REMOVE_ONE_ORDER = (value) => ({
  type: actions.REMOVE_ONE_ORDER,
  value,
});
export const UPDATE_ORDERS = (value) => ({
  type: actions.UPDATE_ORDERS,
  value,
});
