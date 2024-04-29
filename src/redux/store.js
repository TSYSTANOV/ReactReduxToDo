import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducer";
import { filterReducer } from "../redux2/reducerModal";
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
export default store;
