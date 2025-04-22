import React from 'react'
import Main from '../main/Main'
import Pays from '../pays/Pays'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Features from '../features/Features'
import Touch from '../touch/Touxh'
import Customers from '../customers/Customers'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Outlet/>
    <Features/>
    <Pays/>
    <Customers/>
    <Touch/>
    <Footer/>
    </>
  )
}

export default Layout

