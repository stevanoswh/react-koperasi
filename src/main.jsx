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
import CounterRedux from './redux/features/CounterRedux.jsx';
import Login from './pages/Login.jsx';
import CounterWithContext from './pages/CounterWithContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import ParticipantApp from './pages/Participant.jsx';
import EmployeePage from './pages/EmployeePage.jsx';

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
        element: <ProtectedRoute><ParticipantApp/></ProtectedRoute>
      },
      {
        path: "employee",
        element: <ProtectedRoute><EmployeePage/></ProtectedRoute>
      },
      {
        path:`counterredux`,
        element: <CounterRedux/>
      },
      {
        path: 'contextexample',
        element: <CounterWithContext/>
      },

    ],
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}> 
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
