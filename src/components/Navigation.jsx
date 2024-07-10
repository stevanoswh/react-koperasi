import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to="/">Enigma Koperasi</Link>
        <button className="navbar-toggler pe-8" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link mx-lg-2 active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/employee">Employee Managament</Link>
              </li>
            </ul>
            {isLoggedIn ? (
          <div>
            <Link to="/login" className="login-button" onClick={handleLogout}>Logout</Link>
          </div>
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navigation;
