import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompletedFilter,
  addTitleFilter,
  resetFilter,
} from "./redux2/actionCreatorsModal";

function Header({ setOpenModal }) {
  const dispatch = useDispatch();
  const titleValue = useSelector((state) => {
    return state.filter.title;
  });
  const onlyCompletedTasks = useSelector((state) => {
    return state.filter.onlyCompleted;
  });
  function handleTitleValue(e) {
    const titleFilter = e.target.value;
    dispatch(addTitleFilter(titleFilter));
  }
  function handleCompletedValue(e) {
    const completedFilter = e.target.checked;
    dispatch(addCompletedFilter(completedFilter));
  }
  function handleResetFilters() {
    dispatch(resetFilter());
  }
  return (
    <div className="buttons">
      <button
        className="newTask"
        onClick={() => {
          setOpenModal({ type: "create" });
        }}
      >
        Add Task
      </button>
      <input
        type="text"
        value={titleValue}
        placeholder="Enter a task title..."
        onChange={handleTitleValue}
      />
      <label htmlFor="check">
        <input
          id="check"
          type="checkbox"
          checked={onlyCompletedTasks}
          onChange={handleCompletedValue}
        />
        Only Comleted
      </label>
      <button className="sort" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
}
export { Header };
