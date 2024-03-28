import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NotFoundPage from './pages/NotFound.jsx';
import Counter from './pages/LifecycleComp.jsx';
import ReactHook from './pages/ReactHook.jsx';
import ParticipantList from './pages/Participant.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/lifecycle",
        element: <Counter/>
      },
      {
        path: "/hook",
        element: <ReactHook/>
      }, 
      {
        path: "parti",
        element: <ParticipantList/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
