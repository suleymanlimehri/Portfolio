
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"


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
    }
     
    ]
  },
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
