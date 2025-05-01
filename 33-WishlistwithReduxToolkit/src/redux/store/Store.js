import { configureStore } from '@reduxjs/toolkit'
import TodolistSlice from "../../features/todos/TodoListSlice"
export const store = configureStore({
  reducer: {
    list: TodolistSlice ,
  },
})
