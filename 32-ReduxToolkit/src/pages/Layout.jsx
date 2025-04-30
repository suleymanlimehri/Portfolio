import React from 'react'
import Header from "../components/header/Header"
import Todolist from "../components/todos/Todolist"
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Todolist/>
    </div>
  )
}

export default Layout
