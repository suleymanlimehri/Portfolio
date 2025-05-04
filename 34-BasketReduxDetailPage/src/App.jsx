import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./components/layout/Layout"
import Wishlist from './components/wishlist/Wishlist'
import Basket from './components/basket/Basket'
import DetailsPage from './pages/details/DetailsPage'

function App() {

  const router=createBrowserRouter([
    {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"/",
      element:<Home/> 
    },
    {
      path:"/about",
      element:<About/> 
    },
    {
      path:"/contact",
      element:<Contact/> 
    },
    {
      path:"/wishlist",
      element:<Wishlist/> 
    },
    {
      path:"/basket",
      element:<Basket/> 
    },
    {
      path:"/detailpage/:id",
      element:<DetailsPage/> 
    }

     
    ],
  },
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
