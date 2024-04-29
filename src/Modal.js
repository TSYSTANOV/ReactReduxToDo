import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "./redux/actionCreators";
function Modal(props) {
  const dispatch = useDispatch();
  const [task, setTask] = useState(
    props.taskInformation ? props.taskInformation.task : ""
  );
  const [comment, setComment] = useState(
    props.taskInformation ? props.taskInformation.comment : ""
  );
  function handleCreateTask() {
    if (task && comment) {
      const newTask = { task, comment, isCompleted: false, id: uuidv4() };
      dispatch(addTask(newTask));
      props.setOpenModal({ type: null });
    }
  }
  function handleEditTask() {
    dispatch(
      editTask({ ...props.taskInformation, task: task, comment: comment })
    );
    props.setOpenModal({ type: null });
  }
  return (
    <div
      className="modal"
      onClick={(e) => {
        if (e.target.classList.contains("modal")) {
          props.setOpenModal({ type: null });
        }
      }}
    >
      <div className="modal-window">
        <h2 className="modal-title">
          {props.type === "create" ? "Add New Task" : "Information"}
          <span
            className="close-window"
            onClick={() => {
              props.setOpenModal({ type: null });
            }}
          >
            X
          </span>
        </h2>
        <label htmlFor="task" className="label">
          Write task
        </label>
        <textarea
          id="task"
          cols="30"
          rows="10"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          disabled={props.type === "read" ? true : false}
        />
        <label htmlFor="comment" className="label">
          Add comment
        </label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          disabled={props.type === "read" ? true : false}
        />
        {props.type === "create" && (
          <button className="newTask-modal" onClick={handleCreateTask}>
            Add
          </button>
        )}
        {props.type === "edit" && (
          <button className="newTask-modal" onClick={handleEditTask}>
            Edit task
          </button>
        )}
      </div>
    </div>
  );
}
export { Modal };
