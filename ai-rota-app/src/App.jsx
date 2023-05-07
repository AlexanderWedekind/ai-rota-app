import dotenv from 'dotenv';
dotenv.config();
import { React, useState } from 'react';
const superagent = require('superagent');

import './App.css'
import Button from './components/Button.jsx'

const serverUrl = process.env.SERVER_URL + process.env.PORT;
console.log(serverUrl);
const pingServer = serverUrl + '/ping-server';
console.log(pingServer);

function App() {
  const [newRota, setNewRota] = useState(0);

  const requestNewRota = async () => {
    console.log("I'm pinging the server...");
    try{
      const responseFromServer = await superagent.get(pingServer);
      console.log(responseFromServer);
    }catch(error) {
      console.log(error.message);
    }
  };

  return (
    <div className='App-container'>
      <p>App component</p>
     <Button onClick={requestNewRota()}/>

    </div>
  )
}

export default App
