
import  React, { useState } from 'react';
import superagent from 'superagent';

import './App.css'

import DisplayResponseMessage from './components/DisplayResponseMessage';







function App() {

  const [newRota, setNewRota] = useState('');

  const updateRota = (newOne) => {
    console.log('newOne: ' + newOne);
    setNewRota(newOne);
  };

  const pingServer = '/ping-server';

  const tryOpenAi = '/generate-new-rota';

  async function requestNewRota(route) {
    console.log("I'm pinging the server...");
    try{
      const serverResponse = await superagent.get('http://localhost:8000' + route);
      const responseJson = serverResponse.text;
      const responseObject = await JSON.parse(responseJson);
      console.log(responseObject.content);
      updateRota(responseObject.content);
      //console,log('newRota: ' + newRota);
    }catch(error) {
      console.log(error.message);
    }
  };

  
  return (  
    <div className='App-container'>
      <p>App component</p>
      <DisplayResponseMessage newRota={newRota}/>
      <button onClick={() => requestNewRota(tryOpenAi)}>Get a new rota</button>

    </div>
  )
}

export default App
