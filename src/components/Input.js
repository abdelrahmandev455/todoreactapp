import {useRef} from "react"
import {useDispatch} from "react-redux"
import {addTodo} from "../redux/todoSlice"

const Input  = ()=>{
  const dispatch = useDispatch()
  const input = useRef(null)
  const saveTodo = () =>{
    dispatch(addTodo({
      title:input.current.value,
    }))
  }
  
  return(
    <div className="input_container">
     <h1> Todo App </h1>
     <input ref={input}/>
     <button onClick={saveTodo}>Add</button>
    </div>
  )
}

export default Input