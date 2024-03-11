import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css';

const API_KEY = 'f2ec3bb93f6a5769697de8723b967323';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`);
          setWeatherData({ city: search, data: response.data });
        } catch (error) {
          console.error("Error fetching data:", error);
          setWeatherData(null);
        }
      };
      fetchWeatherData();
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(city);
  };

  return (
    <div className="weather-app">
      <form onSubmit={handleSearch} className="search-form">
        <label htmlFor="search" className="visually-hidden">Vyhledejte město</label>
        <input
          id="search"
          type="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search..."
          autoFocus
          required
          className="search-input"
        />
        <button type="submit" className="search-button">Hledat</button>
      </form>
      {weatherData && (
        <div className="weather-container">
          <h2>{weatherData.city}</h2>
          <div className="city-details">
            <p>Datum: {new Date(weatherData.data.dt * 1000).toLocaleDateString()}</p>
            <p>Teplota: {weatherData.data.main.temp}°C</p>
            <p>Vlhkost: {weatherData.data.main.humidity}%</p>
            <p>Vítr: {weatherData.data.wind.speed} km/h</p>
            <img src={`http://openweathermap.org/img/w/${weatherData.data.weather[0].icon}.png`} alt="weather icon" className="weather-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
