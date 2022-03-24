import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";

export default function App() {
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
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
