import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather.js";

import reportWebVitals from "./reportWebVitals";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

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
