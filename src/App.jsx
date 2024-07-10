import { Outlet } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  
  return (
    <div className="main-container">
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>

  )
}

export default App
