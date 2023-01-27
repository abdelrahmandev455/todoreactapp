import {useDispatch} from "react-redux"
import {deleteTodo,setDone} from "../redux/todoSlice"

const Todoitem  = ({id , done , title}) =>{
  const dispatch = useDispatch()
  const deletetodo = ()=>{
    dispatch(deleteTodo({id}))
  }
  const check = ()=>{
    dispatch(setDone({
      id,done
    }))
  }
  return(
    <div key={id} className="todoitem">
      <input type="checkbox" id="input" defaultChecked={done} onChange={check}/>
      <label htmlFor="input">{title}</label>
      <button onClick={deletetodo}>Delete</button>
    </div>
  )
}

export default Todoitem