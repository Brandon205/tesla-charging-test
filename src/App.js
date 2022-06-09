import React, { useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let getAuth = () => {
    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    let data = {
      "password": password,
      "email": email,
      "client_secret": env.CLIENT_SECRET,
      "client_id": env.CLIENT_ID,
      "grant_type": "refresh_token"
    }

    // axios.post("https://owner-api.teslamotors.com/oauth/token", data, config).then((response) => {
    //   console.log(response)
    // })
    console.log(config, data, email, password)
  }

  return (
    <div className="App">
      <h1>Testing App</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
      <button onClick={() => getAuth()}>Get Auth</button>
    </div>
  );
}

export default App;
