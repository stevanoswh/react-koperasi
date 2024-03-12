import React from 'react'

export default function Navigation() {
  return (
    <nav className='nav'>
            <div className="nav__logo"><a href="#">Enigma Koperasi</a></div>
            <ul className="nav__links">
                <li className="link"><a href="#">Home</a></li>
                <li className="link"><a href="#">About Us</a></li>
                <li className="link"><a href="#">Services</a></li>
                <li className="link"><a href="#">Blog</a></li>
                <li className="link"><a href="#" className="nav__btn">Register</a></li>
            </ul>
    </nav>
  )
}
