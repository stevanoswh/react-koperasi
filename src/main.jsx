import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NotFoundPage from './pages/NotFound.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<NotFoundPage/>}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
