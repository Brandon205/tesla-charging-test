import React, { useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let getAuth = () => {
    let config ={
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      mode: 'cors'
    }
  

    let data = {
      "password": password,
      "email": email,
      "client_secret": env.CLIENT_SECRET,
      "client_id": env.CLIENT_ID,
      "grant_type": "password"
    }

    // axios.post("https://owner-api.teslamotors.com/oauth/token", JSON.stringify(data), config).then((response) => {
    //   console.log(response)
    //   console.log("COPY THIS: ", response.data.access_token)
    // })
    
    axios({
      method: 'post',
      url: 'https://owner-api.teslamotors.com/oauth/token',
      // withCredentials: false,
      // mode: 'cors',
      data: JSON.stringify(data),
      headers: config
    }).then((res) => {
      console.log(res)
    })

    console.log(JSON.stringify(config), JSON.stringify(data))
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
