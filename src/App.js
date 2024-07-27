import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);
  const [error, setError] = useState('');

  const handleUsername = (e) => {
    setUsername(username => e.target.value);
    console.log(username)
  }

  const handlePassword = (e) => {
    setPassword(password => e.target.value);
    console.log(password);
  }

  const handleResult = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setResult(true);
      setError('');
    } else {
      setError("Invalid username or password");
      setResult(false)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {(result) ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ):(
        <form onSubmit={handleResult}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>Username:</label>
            <input
              type="text"
              required
              onChange={handleUsername}
              value={username}
            />
          <br/>
          <label>Password:</label>
            <input
              type="password"
              required
              onChange={handlePassword}
              value={password}
            />
          <br/>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
