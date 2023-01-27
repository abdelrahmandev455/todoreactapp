import {
  createSlice
} from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo(state, action) {
      let newTodo = {
        id:Date.now(),
        title:action.payload.title,
        done:false
      }
      state.todoList.push(newTodo)
    },
    deleteTodo(state,action){
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
    },
    setDone(state,action){
      let index = state.todoList.findIndex((todo) => todo.id === action.payload.id)
      state.todoList[index].done = !action.payload.done
    }
  }
})

export default todoSlice.reducer
export const {
    addTodo,
    deleteTodo,
    setDone
  } = todoSlice.actions
