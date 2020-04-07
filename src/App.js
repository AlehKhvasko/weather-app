import React, {useState} from 'react';
import './App.css';
import Box from './component/Box'

const api = {
  key:'4a3e8cc133747fa467515f1b8e7f9c75',
  base: 'http://api.openweathermap.org/data/2.5/',
  //http://api.openweathermap.org/data/2.5/forecast?id=5128581&APPID=4a3e8cc133747fa467515f1b8e7f9c75'
}

function App() {
  const [city,setCity]= useState('');
  const [weather,setWeather]= useState({});



  const builder = (e) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();

    return `${day}, ${date}  of  ${month}, ${year}`

  }
  const clicked = (e) => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setWeather(result)});
  }

  return (
    <div className="App">
      <div>{builder(new Date())}</div>
      <button onClick={clicked}>Click to check weather</button>
      <Box name='weatherBox'></Box>
      <Box name='weatherBox'></Box>
      <Box name='weatherBox'></Box>
      <Box name='weatherBox'></Box>
    </div>
  );
}

export default App;
