import React from 'react';
import TestPage from './TestPage';
import './App.css';

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // let getAuth = () => {
  //   let config ={
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     }
  //   }
  

    // let data = {
    //   'client_id': 'ownerapi',
    //   'code_challenge': '123',
    //   'code_challenge_method': 'S256',
    //   'redirect-uri': 'https://auth.tesla.com/void/callback',
    //   'response_type': 'code',
    //   'scope': "openid email offline_access",
    //   'state': '12345',
    //   'login_hint': email
    // }

    // axios.post("https://auth.tesla.com/oauth2/v3/authorize", JSON.stringify(data), config).then((response) => {
    //   console.log(response)
    //   console.log("COPY THIS: ", response.data.access_token)
    // })
    
    // axios({
    //   method: 'post',
    //   url: 'https://auth.tesla.com/oauth2/v3/authorize',
    //   // withCredentials: false,
    //   // mode: 'cors',
    //   data: JSON.stringify(data),
    //   headers: config
    // }).then((res) => {
    //   console.log(res)
    // })

    // axios.get('https://auth.tesla.com/oauth2/v3/authorize')
    // fetch('https://auth.tesla.com/oauth2/v3/authorize').then((res) => {
    //   console.log(res)
    // });

    // console.log(JSON.stringify(config), JSON.stringify(data))
  // }

  return (
    <div className="App">
      {/* <h1>Testing App</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"></input>
      <button onClick={() => getAuth()}>Get Auth</button> */}
      <TestPage />
    </div>
  );
}

export default App;
