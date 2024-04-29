export function addTask(task) {
  return {
    type: "ADD_TASK",
    payload: task,
  };
}
export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
}
export function editTask(editedTask) {
  return {
    type: "EDIT_TASK",
    payload: editedTask,
  };
}
export function toggleTask(id) {
  return {
    type: "TOGGLE_TASK",
    payload: id,
  };
}
