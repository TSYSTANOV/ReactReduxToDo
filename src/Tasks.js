import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "./redux/actionCreators";
function Tasks({ setOpenModal }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const filteredTasks = tasks.filter((item) => {
    const titleCheck = item.task
      .toLowerCase()
      .includes(filter.title.toLowerCase());
    const completedCheck =
      item.isCompleted === filter.onlyCompleted ||
      filter.onlyCompleted === false
        ? true
        : false;
    return titleCheck && completedCheck;
  });
  function handleOpenModalForRead(task) {
    setOpenModal({ type: "read", taskInformation: task });
  }
  function handleOpenModalForEdit(task) {
    setOpenModal({ type: "edit", taskInformation: task });
  }
  function handleOpenModalForDelete(id) {
    dispatch(deleteTask(id));
  }
  function handleToggleTask(id) {
    dispatch(toggleTask(id));
  }
  return (
    <>
      {filteredTasks.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Comment</th>
              <th>Settings</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {filteredTasks.map((task) => {
              return (
                <tr
                  key={task.id}
                  data-id={task.id}
                  style={
                    task.isCompleted
                      ? { backgroundColor: "rgb(0, 192, 83)" }
                      : {}
                  }
                >
                  <td>
                    <input
                      type="checkbox"
                      className="check"
                      onChange={() => {
                        handleToggleTask(task.id);
                      }}
                    />
                    <span className="oval" data-change-color-id="0">
                      <span
                        className="oval1"
                        style={task.isCompleted ? { display: "block" } : {}}
                      ></span>
                    </span>
                    <p className="taskInformation">{task.task}</p>
                  </td>
                  <td className="messageInformation">{task.comment}</td>
                  <td className="btnID">
                    <button
                      className="settings"
                      onClick={() => {
                        handleOpenModalForRead(task);
                      }}
                    >
                      🛡️ Info
                    </button>
                    <button
                      className="settings"
                      onClick={() => {
                        handleOpenModalForEdit(task);
                      }}
                    >
                      🔧 Edit
                    </button>
                    <button
                      className="settings"
                      onClick={() => {
                        handleOpenModalForDelete(task.id);
                      }}
                    >
                      ✖️ Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
export { Tasks };
