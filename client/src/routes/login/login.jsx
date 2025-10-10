import './login.scss';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in as ${username}`);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login">
      <div className="textContainer">
        <div className="wrapper">
          <div className="formContainer">
            <h2>Welcome back</h2>
            <form onSubmit={handleSubmit} className="loginForm">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
            <a href="#" className="signupLink">Don't you have an account?</a>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
