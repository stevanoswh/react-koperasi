import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='nav'>
            <div className="nav__logo"><Link className='nav__logo_link' to="/">Enigma Koperasi</Link></div>
            <ul className="nav__links">
                <li className="link"><Link className='link__list' to={`/`}>Home</Link></li>
                <li className="link"><Link className='link__list' to={"/contact"}>Contact</Link></li> 
                <li className="link"><Link className='link__list nav__btn' to={"/"}>Register</Link></li>
            </ul>
    </div>
  )
} 
