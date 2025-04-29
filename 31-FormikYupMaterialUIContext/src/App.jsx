import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Layout from "./pages/Layout"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  const router=createBrowserRouter([{
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
        path:"/blog",
       element:<Blog/> 
       },
    ]
  },
  {
    path: "/register", 
    element: <Register />
  },
  {
    path: "/login", 
    element: <Login />
  }
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
