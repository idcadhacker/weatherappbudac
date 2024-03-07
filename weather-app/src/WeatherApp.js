import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const cities = ['Prague', 'London', 'New York', 'Tokyo', 'Sydney'];
const API_KEY = 'f2ec3bb93f6a5769697de8723b967323';
 
function WeatherApp() {
  const [weatherData, setWeatherData] = useState([]);
  const [expandedCity, setExpandedCity] = useState(null);
 
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await Promise.all(
        cities.map(city =>
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
            .then(response => ({ city: city, data: response.data }))
        )
      );
      setWeatherData(data);
    };
 
    fetchWeatherData();
  }, []);
 
  const toggleExpandCity = (cityName) => {
    setExpandedCity(expandedCity === cityName ? null : cityName);
  };
 
  return (
<div className="weather-app">
      {weatherData.map(({ city, data }, index) => (
<div key={index} className="city">
<h2 onClick={() => toggleExpandCity(city)}>{city}</h2>
          {expandedCity === city && (
<div className="city-details">
              {data.list.slice(0, 5).map((forecast, index) => (
<div key={index} className="forecast-details">
<br></br>
<p>Date: {new Date(forecast.dt_txt).toLocaleDateString()}</p>
<p>Temp: {forecast.main.temp}°C</p>
<p>Humidity: {forecast.main.humidity}%</p>
<p>Wind: {forecast.wind.speed} km/h</p>
                  {}
</div>
              ))}
</div>
          )}
</div>
      ))}
</div>
  );
}
 
export default WeatherApp;