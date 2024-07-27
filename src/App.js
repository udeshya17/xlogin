import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);
  const [error, setError] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleResult = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Username and password cannot be empty");
      return;
    }
    if (username === "user" && password === "password") {
      setResult(true);
      setError('');
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {(!result) ? (
        <form onSubmit={handleResult}>
          {error && <p>{error}</p>}
          <label>
            Username:
            <input
              type="text"
              required
              onChange={handleUsername}
              value={username}
              placeholder="username"
            />
          </label>
          <br/>
          <label>
            Password:
            <input
              type="password"
              required
              onChange={handlePassword}
              value={password}
              placeholder="password"
            />
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default App;
