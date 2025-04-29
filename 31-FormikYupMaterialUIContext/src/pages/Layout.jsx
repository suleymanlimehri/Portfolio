import React from 'react'
import Navbar from "../components/navbar/Navbar"
import {Outlet} from "react-router-dom"
import Product from '../components/product/Product'
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Product/>
    </div>
  )
}

export default Layout
