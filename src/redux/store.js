import {configureStore} from "@reduxjs/toolkit"
import todoSlice from "./todoSlice.js"

const store = configureStore({
  reducer:{
    todo:todoSlice
  }
})

export default store
