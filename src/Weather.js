import React, { useState } from "react";
import "./index.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = `8c4070f08d562986da25915538f23e1a`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handelCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="main">
        <div className="container">
          <div className="card">
            <div className="card-header bg-transparent">
              <h3>
                <i className="fas fa-frog frog-icon" id="frog"></i> Weather App
              </h3>
            </div>

            <div className="card-body">
              <form id="searchForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="search"
                        placeholder="e.g. Vienna"
                        className="form-control"
                        autofocus="on"
                        id="search-input"
                        onChange={handelCityChange}
                      />
                      <div className="form-text">City, region, village...</div>
                    </div>
                  </div>

                  <div className="col">
                    <button type="submit" className="btn btn-primary w-50">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <br />
              <br />
              <WeatherInfo data={weatherData} />
              <hr />
              <div className="forecast" id="forecast-row"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loeading...";
  }
}
