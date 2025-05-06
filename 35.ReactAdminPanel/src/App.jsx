import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Wishlist from "./pages/wishlist/Wishlist"
import Basket from "./pages/basket/Basket"
import DetailsPage from "./pages/details/DetailsPage"
import Admin from "./pages/AdminPanel"
import { ToastContainer } from "react-toastify"
function App() {

  const router=createBrowserRouter([
    {
    path:"/",
    element:<Layout/>,
    children:[
      {
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
        path:"/admin",
        element:<Admin/>
      },
      {
        path:"/detailspage/:id",
        element:<DetailsPage/>
      }


    ]
  },
])
  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
