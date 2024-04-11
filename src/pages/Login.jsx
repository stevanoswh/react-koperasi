import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      login(username, rememberMe);
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
