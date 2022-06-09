import axios from 'axios';
import './App.css';

function App() {

  let getAuth = () => {
    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    let data = {
      "password": ""
    }

    axios.post("https://owner-api.teslamotors.com/oauth/token", data, config).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App">
      <h1>Testing App</h1>
    </div>
  );
}

export default App;
