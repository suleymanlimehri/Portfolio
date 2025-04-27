import React, { useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from './User.module.css'; 
const User = () => {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [modal, setModal] = useState(false);
  let [editName, setEditName] = useState("");
  let [editUsername, setEditUsername] = useState("");
  let [editId, setEditId] = useState(null);

  let reducer = (state, action) => {
    switch (action.type) {
      case "add-todo":
        if (action.name !== "" && action.username !== "") {
          let newtodo = {
            id: uuidv4(),
            name: action.name,
            username: action.username
          }
          return {
            ...state,
            todos: [...state.todos, newtodo]
          }
        } else {
          alert("input içi boş ola bilməz");
          return state;
        }
      case "reset-todo":
        return { ...state, todos: [] }
      case "delete-todo":
        let filtered = state.todos.filter((item) => item.id !== action.id);
        return { ...state, todos: filtered }
        case "edit-todo":
          let updateTodo=state.todos.map((item)=>item.id==action.id?{...item,name:action.name,username:action.username}:item)
          return { ...state, todos: updateTodo }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    todos: JSON.parse(localStorage.getItem('todos')) || []
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

let Edit=(item)=>{
  setModal(true)
  setEditName(item.name)
  setEditUsername(item.username) 
  setEditId(item.id) 
}
  return (
    <div className={styles.container}>
      {modal&& (
              <div className={styles.modalOverlay}>
              <div className={styles.input_area}>
                <input
                type="text"
                value={editName}
                onChange={(e)=>setEditName(e.target.value)}
                placeholder="New Name"
                className={styles.input}
              />
              <input
                type="text"
                value={editUsername}
                onChange={(e)=>setEditUsername(e.target.value)}
                placeholder="New Username"
                className={styles.input}
              /> 
                <div className={styles.buttonGroup}>
              <button onClick={()=>{dispatch({type:"edit-todo",  id: editId,name:editName,username:editUsername});setModal(false)}} className={styles.button}>
                Edit
              </button>
            </div>
            </div>
            </div>
      )}
      <div className={styles.inputs}>
        <div className={styles.input_area}>
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={styles.input}
        /> 
          <div className={styles.buttonGroup}>
        <button onClick={() => dispatch({ type: "add-todo", name: name, username: username })} className={styles.button}>
          Create
        </button>
        <button onClick={() => dispatch({ type: "reset-todo" })} className={styles.button}>
          Reset
        </button>
      </div>
      <ul className={styles.list}>
        {state.todos && state.todos.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <span>{item.name} {item.username}</span>
            <div className={styles.icons}>
              <MdDelete
                onClick={() => dispatch({ type: "delete-todo", id: item.id })}
                className={styles.icon}
                style={{ color: "red" }}
              />
              <FaEdit
                onClick={() => Edit(item)}
                className={styles.icon}
                style={{ color: "green" }}
              />
            </div>
          </li>
        ))}
      </ul>
      </div>
        </div>
    </div>
  );
}
export default User;
