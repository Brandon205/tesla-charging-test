import React, { useState } from 'react';
// import axios from 'axios';
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
      "client_secret": "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3",
      "client_id": "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384",
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
