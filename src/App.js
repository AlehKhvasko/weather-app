import React from 'react';
import './App.css';
import axios from 'axios';
import Weather from './component/Weather';


const apiKey = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      date: null
    }
  }

  componentDidMount() {
    this.getWeatherData();
    
  }


  getWeatherData() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=' + apiKey + '&units=imperial')
    .then(response => {
      console.log(response.data);
      this.setState({ weather: response.data });
    }).catch(error => console.error(error));
  }
  nullCheck() {
    if(this.state.weather === null) {
      return <h2>no information</h2>
    } else {
      return this.state.weather.list.map(listItem => <Weather
         
        date = {listItem.dt_txt}
        feels_like = {listItem.main.feels_like}
        tempMin = {listItem.main.temp_min}
        tempMax = {listItem.main.temp_max}
        clouds = {listItem.weather[0].description}
        weatherIcon = {listItem.weather[0].icon}

      />
     

      );}
    
  }
  c
  render() {
    return (
      <div className="App">
          {this.nullCheck()}
      </div>
    );
  }
}

export default App;

