import * as actionTypes from "./actionTypes";
const initialState = [];
function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [...state, action.payload];
    case actionTypes.EDIT_TASK:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case actionTypes.DELETE_TASK:
      return state.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    case actionTypes.TOGGLE_TASK:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    default:
      return state;
  }
}
export { tasksReducer };
