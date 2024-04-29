export const addTitleFilter = (title) => {
  return {
    type: "ADD_TITLE_FILTER",
    payload: title,
  };
};
export const addCompletedFilter = (param) => {
  return {
    type: "ONLY_COMPLETED",
    payload: param,
  };
};
export const resetFilter = () => {
  return {
    type: "RESET_FILTERS",
  };
};
