import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, DeleteItem, DeleteAll, edit } from '../../features/todos/TodoListSlice'
import { AiTwotoneDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

export function Todolist() {
  const list = useSelector((state) => state.list.todos)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()


  //modal
  const [editId, setEditId] = useState(null)
  const [editInput, setEditInput] = useState("")
  const [modal, setModal] = useState(false)
  const Add = () => {
    if (input != '') {
      dispatch(add(input))
      setInput('')
    }
  }

  const Alldelete = () => {
    dispatch(DeleteAll())
  }
  const Delete = (id) => {
    dispatch(DeleteItem(id))
  }
  const Edit = (id, title) => {
    setEditId(id)
    setEditInput(title)
    setModal(true)
  }
  const Update = () => {
    if (editInput != '') {
      dispatch(edit({ id: editId, title: editInput }))
      setModal(false)
      setEditId(null)
      setEditInput('')
    }
  }
  const btn = {
    backgroundColor: '#ed53f2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    marginRight: '0.5rem',
    marginBottom:"10px",
    cursor: 'pointer',
    fontWeight: 'bold'
  }
  
  const cancelBtn = {
    backgroundColor: '#e0aaff',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
  
  return (
    <div style={{
      backgroundColor: 'purple', 
      color: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '500px',
      margin: '2rem auto',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    }}>
      {
        modal ? (
          <>
            <input
              type="text"
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                width: '100%',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                border:"2px solid #ed53f2"
              }}
            />
            <button onClick={Update} style={btn}>Update</button>
            <button onClick={() => {setModal(false),Alldelete()}} style={cancelBtn}>All Delete</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                width: '100%',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '0.5rem'
              }}
            />
            <button onClick={Add} style={btn}>Add</button>
            <button onClick={Alldelete} style={cancelBtn}>All Delete</button>
          </>
        )
      }
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {
          list.map((todo) => (
            <li key={todo.id} style={{
              backgroundColor: '#7b2cbf',
              padding: '0.75rem',
              marginBottom: '0.5rem',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              {todo.title}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <AiTwotoneDelete onClick={() => Delete(todo.id)} style={{ cursor: 'pointer', }} />
                <TbEdit onClick={() => Edit(todo.id, todo.title)} style={{ cursor: 'pointer', color: '#ed53f2' }} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>    
  )
}
export default Todolist;