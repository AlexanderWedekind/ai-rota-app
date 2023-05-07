require('dotenv').config();
import { useState } from 'react';
const superagent = require('superagent');
const serverUrl = process.env.SERVER_URL + process.env.PORT;
console.log(serverUrl);


import './App.css'
import Button from './components/Button.jsx'

function App() {
  const [newRota, setNewRota] = useState(0);

  const requestNewRota = async () => {
    try{
      const responseFromServer = await superagent.get(serverUrl);
      console.log(responseFromServer);
    }catch(error) {
      console.log(error.message);
    }
  };

  return (
    <div className='App-container'>
      <p>App component</p>
     <Button requestNewRota={requestNewRota}/>

    </div>
  )
}

export default App
