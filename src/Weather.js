import React {useState} from "react";
import "./index.css";
import axios from "axios";

export default function Weather() {
    const [ready, setReady] = useState(false);
    setTemperature(response.data.main.temp);
    setReady(true);
  
}
if (ready) {
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
            <form id="searchForm">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <input
                      type="search"
                      placeholder="e.g. Vienna"
                      className="form-control"
                      autofocus
                      id="search-input"
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
            <div className="row">
              <div className="col">
                <div className="card border-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted" id="city-input">
                      Vienna
                    </h5>
                    <h6
                      className="card-subtitle mb-2 text-muted"
                      id="main-date"
                    >
                      Date
                    </h6>
                    <span className="mainTemerature" id="temp">
                      8
                    </span>
                    <span className="unit">
                      <span> °C </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="dailyForecast">
                  <span
                    className="weather-icon"
                    role="img"
                    aria-label="cloud and wind"
                  >
                    💨
                  </span>
                  <span className="weatherText" id="description"></span>
                </div>
                <ul id="weather-info">
                  <li>
                    <span id="more-info">Min.:_ Max.:_</span>
                  </li>
                  <li>
                    <span id="humidity">Humiditiy:</span>
                    <span id="wind">Wind:</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="forecast" id="forecast-row"></div>
          </div>
        </div>
        <div className="footer">
          <a
            href="https://github.com/Franziska-F/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <span> by Franziska Fouchs</span>
        </div>
      </div>
    </div>);
  
}
else {const apiKey = `8c4070f08d562986da25915538f23e1a`;
  let city = "Vienna";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return ("Loeading...")

}