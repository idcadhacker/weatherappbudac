import React, { useState } from 'react';
import './Login.css';

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" }
];

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      onLogin();
    } else {
      setError('Neplatné údaje');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}
        <h2>Přihlásit se </h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        <button type="submit" className="login-button">Přihlásit se</button>
      </form>
    </div>
  );
}

export default Login;
