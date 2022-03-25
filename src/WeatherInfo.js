import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title text-muted" id="city-input">
                {props.data.city}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted" id="main-date">
                <FormatedDate date={props.data.date} />
              </h6>
              <span className="mainTemerature" id="temp">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">
                <span> °C </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="dailyForecast">
            <img
              className="weather-icon"
              alt="icon that matches current weather"
              src={props.data.iconUrl}
            />
            <p className="weatherText" id="description">
              {props.data.description}
            </p>
          </div>
          <ul id="weather-info">
            <li>
              <span id="more-info">Min.:_ Max.:_</span>
            </li>
            <li>
              <span id="humidity">Humiditiy: {props.data.humidity} %</span>
              <span id="wind">Wind: {props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
