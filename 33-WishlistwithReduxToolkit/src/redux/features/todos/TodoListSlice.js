import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const Todolist = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload
      })
    },
    DeleteAll: (state) => {
      state.todos = []
    },
    DeleteItem: (state,action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, title } = action.payload;
      const todoUpdate = state.todos.find(todo => todo.id === id);
      if (todoUpdate) {
        todoUpdate.title = title;
      }
    }
  },
})

export const { add, DeleteAll,DeleteItem ,edit} = Todolist.actions

export default Todolist.reducer