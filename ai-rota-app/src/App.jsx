// import dotenv from 'dotenv';
// dotenv.config();
import { React, useState } from 'react';
import superagent from 'superagent';

import './App.css'
import Button from './components/Button.jsx'

// const serverUrl = process.env.SERVER_URL + process.env.PORT;
// console.log(serverUrl);
// const pingServer = serverUrl + '/ping-server';
// console.log(pingServer);



function App() {
  const [newRota, setNewRota] = useState(0);

  const pingServer = '/ping-server';

  const tryOpenAi = '/generate-new-rota';

  async function requestNewRota(route) {
    console.log("I'm pinging the server...");
    try{
      const responseFromServer = await superagent.get('http://localhost:8000' + route);
      console.log(responseFromServer);
    }catch(error) {
      console.log(error.message);
    }
  };

  function iGotClicked() {
    console.log('I got clicked');
  }

  return (  
    <div className='App-container'>
      <p>App component</p>
     <Button onClick={requestNewRota(tryOpenAi)}/>

    </div>
  )
}

export default App
