import React from 'react';

export default function Weather(props) {
    return (
        <div className='weather'>
            <h2>New York</h2> 
            <h3>{props.date}</h3>  
            <p>Feels like {props.feels_like}F</p>  
            <p>Min temp {props.tempMin}F</p>  
            <p>Max temp {props.tempMax}F</p>  
            <p>{props.clouds}</p>  
            <img src={`http://openweathermap.org/img/w/${props.weatherIcon}.png`} alt="no image"/>
        </div>
    )
}
