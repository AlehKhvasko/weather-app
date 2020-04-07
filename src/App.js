import React, {useState} from 'react';
import './App.css';
import Box from './component/Box'

const api = {
  key:'4a3e8cc133747fa467515f1b8e7f9c75',
  base: 'http://api.openweathermap.org/data/2.5/',
  //http://api.openweathermap.org/data/2.5/forecast?id=5128581&APPID=4a3e8cc133747fa467515f1b8e7f9c75'
  //http://api.openweathermap.org/data/2.5/weather?q=new york&units=metric&APPID=4a3e8cc133747fa467515f1b8e7f9c75
}

function App() {
  const [city,setCity]= useState('');
  const [weather,setWeather]= useState([]);



  const builder = (e) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();

    return `${day}, ${date}  of  ${month}, ${year}`

  }
  const search = (e) => {
    if (e.key === 'Enter'){
      fetch(`${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`)
      .then(res =>res.json())
      .then(result => {
        console.log(result);
        // setCity('');
        // setWeather(result.list)
        return result.list
      })
      .then(data => {
        console.log(data);
        for(let i =0; i < data.length; i++){
          setWeather(data.main.temp)
        }
      });
    }
  }
  //how to take array data and implement it
  // const boxArr = weather.map(e => {
  //   return(<Box name={e.main}/>)
  // });
  return (

    <div className="App">
      <div>{builder(new Date())}</div>
      <input
      type='text'
      onChange={e => setCity(e.target.value)}
      placeholder='Input here...'
      onKeyPress={search}
      />
      {/* <Box name={weather.name} info={weather.country}></Box> */}
    </div>
  );
}

export default App;
