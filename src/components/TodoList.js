import {
  useSelector
} from "react-redux"
import Todoitem from "./Todoitem"

const TodoList = ()=> {
  const todos = useSelector(state => state.todo.todoList)
  return(
    <div className="todos_container">
     {
      todos.map(todo => {
        return(
          <Todoitem id={todo.id} done={todo.done} title={todo.title} />
        )
      })}
    </div>
  )
}

export default TodoList