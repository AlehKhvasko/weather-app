import React from 'react';
import './App.css';
import Box from './component/Box'

const api = {
  key:'4a3e8cc133747fa467515f1b8e7f9c75',
  base: 'http://api.openweathermap.org/data/2.5/forecast?id=5128581&APPID=4a3e8cc133747fa467515f1b8e7f9c75',
}

function App() {

  const builder = (e) => {
    let days = ['Monday', 'Tuesday', ]
  }

  return (
    <div className="App">
      <Box name='weatherBox'></Box>
      <Box name='weatherBox'></Box>
      <Box name='weatherBox'></Box>
      <Box name='weatherBox'></Box>
    </div>
  );
}

export default App;
