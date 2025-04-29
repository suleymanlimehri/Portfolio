import React from 'react'
 import axios from "axios";
import { createContext,useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';


let BaseUrl="https://fakestoreapi.com/products"

export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [card, setProduct] = useState([]);
  const cardProduct = async () => {
    try {
      const res = await axios.get(BaseUrl);
      setProduct(res.data);
      toast.success("product create")
    } catch {
     
      toast.warn("error")
    }
  };

  useEffect(() => {
    cardProduct();
  }, []);
  console.log(card)

  return (
    <ProductContext.Provider value={card}>{children}
  <ToastContainer position="top-right" autoClose={1000} />
  </ProductContext.Provider>
    
  );
}