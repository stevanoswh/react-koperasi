import './App.css'

function App() {

  return (
    <div className="main-container">
      <nav>
        <div className="nav__logo"><a href="#">Enigma Koperasi</a></div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About Us</a></li>
          <li className="link"><a href="#">Services</a></li>
          <li className="link"><a href="#">Blog</a></li>
          <li className="link"><a href="#" className="nav__btn">Register</a></li>
        </ul>
      </nav>
      <section className="container">
        <div className="content__container">
          <h1>
            Enigma Koperasi<br />
            <span className="heading__1">Layanan Finansial Pilihan</span><br />
            <span className="heading__2">Utama Kita Semua</span>
          </h1>
          <p>
            Koperasi Enigma adalah sebuah koperasi yang berdedikasi tinggi pada 
            pemberdayaan ekonomi masyarakat. Didirikan pada tahun 2010, kami telah
            berkomitmen untuk memberikan solusi finansial yang inovatif dan 
            terpercaya kepada anggota kami.
          </p>
          <form>
            <input type="text" placeholder="Drop your email for services updates" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="image__container">
          <img src="../public/images/header-1.jpg" alt="header" />
          <img src="../public/images/header-2.jpg" alt="header" />
          <div className="image__content">
            <ul>
              <li>Get promos for groceries
              <br />For new registries</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
