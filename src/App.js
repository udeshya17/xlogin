import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);
  const [output, setOutput] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleResult = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setResult(true);
    } else {
      setOutput(output => "Invalid username or password")
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {(!result) ? (
        <div> {output}
        <br/>
        <form onSubmit={handleResult}>
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
        </div>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default App;
