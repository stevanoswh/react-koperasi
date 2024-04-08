import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthState } from '../redux/features/authSlice';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); 
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

      const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            // Hanya menggunakan satu action untuk mengatur status login dan informasi user
            dispatch(setAuthState({ isLoggedIn: true, user: { name: username } }));
            
            // Mengatur informasi login di localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify({ name: username }));
            if (rememberMe) {
              localStorage.setItem('rememberMe', 'true');
            }
            
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };
      
      

  return (
    <div id="login" className="container">
      <div className="row-fluid">
        <div className="span12">
          <div className="login well well-small">
            <div className="center">
              <img src="http://placehold.it/250x100&text=Logo" alt="logo" />
            </div>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="control-group">
                <div className="input-prepend">
                  <span className="add-on"><i className="icon-user"></i></span>
                  <input
                    name="username"
                    required
                    placeholder="Username"
                    maxLength="255"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="input-prepend">
                  <span className="add-on"><i className="icon-lock"></i></span>
                  <input
                    name="password"
                    required
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <label id="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  /> Remember Me?
                </label>
              </div>
              <div className="control-group">
                <input className="btn btn-primary btn-large btn-block" type="submit" value="Sign in" />
              </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
