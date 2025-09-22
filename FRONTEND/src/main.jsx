import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from'./pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Review from './pages/Review.jsx'
const router=createBrowserRouter([
  //home page
  {
    path:"/",
    element:<><Home/></>
  },
  //code page
  {
    path:"/code",
    element:<><Review/></>
  },
  
  //diff routes
  {
    path:"*",
    element: <h1 className='text-[100px]'>ENTER VALID ROUTE</h1>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
