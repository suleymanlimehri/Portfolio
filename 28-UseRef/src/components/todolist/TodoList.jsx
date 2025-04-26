import React, { useEffect, useState } from 'react'
import style from './Todolist.module.css'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

let TodoList = () => {
    let [input, setInput] = useState("");
    let [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || []);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    let toast = (text) => {
        Toastify({
            text: text,
            duration: 3000,
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff7eb9, #6a4c93)"
            }
        }).showToast();
    };

    let addBtn = () => {
        if (input.trim() === "") {
            toast("Input boş ola bilməz!");
            return;
        }

        let obj = {
            id: uuidv4(),
            name: input,
            isChecked: false
        };

        setList([...list, obj]);
        setInput("");
        toast("Add Todo successfuly");
    };

    let deleteItem = (id) => {
        let todo = list.find(item => item.id === id);
        if (!todo.isChecked) {
            toast("İcra olunmayan todo silinmesin");
            return;
        }
        let updated = list.filter(item => item.id !== id);
        setList(updated);
        toast("Todo silindi");
    };

    let edit = (id) => {
        let newName = prompt("add New name");
        if (newName) {
            let updated = list.map(item =>
                item.id === id ? { ...item, name: newName } : item
            );
            setList(updated);
            toast("Update Todo successfuly");
        }
    };

    let allDelete = () => {
        setList([]);
        localStorage.removeItem("list");
        toast("Remove Todo successfuly");
    };

    let changeCheck = (id) => {
        let updated = list.map(item =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
        );
        setList(updated); 
        toast("Update name");
    };

    return (
        <div className={`${style.todos} container`}>
            <h2>⭐ TodoList</h2>

            <div className={style.text}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") addBtn();
                    }}
                />
                <button onClick={addBtn} className={style.addBtn}>Add</button>
            </div>

            <ul>
                {list.map((item, index) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.isChecked}
                            onChange={() => changeCheck(item.id)} 
                        />
                        <span
                            style={{
                                color: item.isChecked ? "green" : "red",
                                textDecoration: item.isChecked ? "line-through" : "none"
                            }}
                        >
                            {index + 1}. {item.name}
                        </span>
                        <div className={style.btn}>
                            <button onClick={() => edit(item.id)} className={style.editbtn}>
                                <FaEdit />
                            </button>
                            <button
                                onClick={() => deleteItem(item.id)}
                                className={style.deletebtn}
                                disabled={!item.isChecked}
                               >
                                <MdDelete />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <button onClick={allDelete} className={style.allBtn}>All delete</button>
        </div>
    );
};

export default TodoList;
