import * as actions from "./actionTypes";

const initState = JSON.parse(localStorage.getItem("orders")) || [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_ONE_ORDER:
      return [...state, action.value];
    case actions.REMOVE_ONE_ORDER:
      return state.filter((item) => item.id !== action.value.id);
    case actions.UPDATE_ORDERS: {
      return action.value;
    }
    default:
      return state;
  }
};

export default reducer;
