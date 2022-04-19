import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <div className="card">
          <h1 id="location" className="forecast">Toronto</h1>
          <p id="temperature" className="forecast">17°c</p>
          <p id="main-forecast" className="forecast">Clear</p>
          <ul>
            <li>
              <h2>Humidity</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>              <p id="humidity" className="forecast">7%</p>
            </li>
            <li>
              <h2>Feels like</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
              <p id="feels-like" className="forecast">15°c</p>
            </li>
            <li>
              <h2>Wind speed</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>              <p id="wind" className="forecast">5 km/h</p>
            </li>
          </ul>
        </div>
      </main>
    )
  }
}

export default Main;