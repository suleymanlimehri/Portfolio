import './App.css'
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import Products from './pages/products/Products';
function App() {

  let url = ("https://fakestoreapi.com/products")

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState("")
  const [number, setNumber] = useState(0)
  //modal
  const [modal, setModal] = useState(false)
  const [editInput, setEditInput] = useState("")
  const [editNumber, setEditNumber] = useState("")
  let [editId, setEditId] = useState(null);


  let products = async () => {
    try {
      let res = await axios.get(url)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    products()
  }, [])

  let addBtn = () => {
    let newobj = {
      title: input,
      price: number
    }
    toast.success("product add successfuly")
    setProduct([...product, newobj])
  }
  let deleteBtn = (id) => {
    let deleteitem = product.findIndex((item) => item.id == id)
    product.splice(deleteitem, 1)
    setProduct([...product])
    toast.success("product delete successfuly")
  }
  let reset = () => {
    setProduct([])
  }
  let editBtn = (item) => {
    setModal(true);
    setEditInput(item.title);
    setEditNumber(item.price);
    setEditId(item.id);
  };
  let updateBtn = (id) => {
    let updatedProducts = product.map((item) =>
      item.id === id ? { ...item, title: editInput, price: editNumber } : item
    );
    setProduct(updatedProducts);
    setModal(false);
    toast.success("Product updated successfully!");
  };
  let button={
    backgroundColor: 'blue', 
    color: "white", 
    borderRadius: 5, 
    border: "none", 
    padding: 5, 
    width: 60, 
    marginLeft: 15 
  }
  let Modal={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.25)'

  }
  return (

    <>
      {
        loading ? (

          <Spinner animation="grow" />
        ) : (
          <div className='container'>
            <div className="table">
            {modal && (
              <div style={Modal}>
                <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)} style={{ borderRadius: 5, padding: 5, marginRight: 15, border: "1px solid grey" }} />
                <input type="number" value={editNumber} onChange={(e) => setEditNumber(e.target.value)} style={{ borderRadius: 5, padding: 5, marginRight: 15, border: "1px solid grey" }} />
                <button style={button}
                  onClick={() => updateBtn(editId)}>Update</button>
              </div>

            )}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{ borderRadius: 5, padding: 5, marginRight: 15, border: "1px solid grey" }} />
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} style={{ borderRadius: 5, padding: 5, marginRight: 15, border: "1px solid grey" }} />
            <button style={{ backgroundColor: 'blue', color: "white", borderRadius: 5, border: "none", padding: 5, width: 60, marginLeft: 15 }}
              onClick={() => addBtn()}>Add</button>
            <button style={{ backgroundColor: 'blue', color: "white", borderRadius: 5, border: "none", padding: 5, width: 60, marginLeft: 15 }}
              onClick={() => reset()}>Reset</button>
            </div>
            <Products product={product} Delete={deleteBtn}  Edit={editBtn} />
            <ToastContainer />
          </div>

        )
      }
    </>
  )
}

export default App

