import { useDispatch } from "react-redux"

function Header(){
    const dispatch = useDispatch()
    return (
        <div className="buttons">
          <button className="newTask">Add Task</button>
          <button className="sort">Sort by lastest Task ⬆️</button>
        </div>
    )
}
export {Header}