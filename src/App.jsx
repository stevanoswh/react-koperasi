import './App.scss'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'

function App() {

  return (
    <div className="main-container">
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
