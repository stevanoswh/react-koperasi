import { Outlet } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { useDispatch } from 'react-redux';
import { setAuthState } from './redux/features/authSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    if (isLoggedIn && user) {
      dispatch(setAuthState({ isLoggedIn: true, user }));
    }
  }, [dispatch]);


  return (
    <div className="main-container">
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
