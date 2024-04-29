import * as actionTypesFilter from "./actionTypesModal";
const initialState = {
  title: "",
  onlyCompleted: false,
};
function filterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypesFilter.ADD_TITLE_FILTER:
      return { ...state, title: action.payload };
    case actionTypesFilter.ONLY_COMPLETED:
      return { ...state, onlyCompleted: action.payload };
    case actionTypesFilter.RESET_FILTERS:
      return { ...initialState };
    default:
      return state;
  }
}
export { filterReducer };
