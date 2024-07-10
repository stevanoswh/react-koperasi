import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const success = await login(username, password, rememberMe);
      if (success) {
        navigate('/');
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (isLoggedIn) {
    return null; 
  }

  return (
    <div className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                  <div className="text-center mb-5">
                    <a href="#!">
                      <img src="images/enigma.png" alt="Logo" width="175" />
                    </a>
                  </div>
                </div>
              </div>
              <form onSubmit={handleLogin}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg" type="submit">Log In</button>
                    </div>
                  </div>
                </div>
              </form>
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
              <div className="row">
                <div className="col-12">
                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
