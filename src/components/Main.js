import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      location: "",
      main: "",
      temperature: null,
      feelsLike: null,
      wind: null,
      humidity: null,
    }
  }
  getLocationInput = () => {
    const locationInput = document.getElementById("location-input");
    return locationInput.value;
  }
  meterPerSecondToKilometerPerHour = (mps) => {
    return mps * 3.495;
  }
  fetchForecast(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0982e2845899ef11e0c7aebc11449571&units=metric`, {mode: 'cors'})
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          location: response.name,
          main: response.weather[0].main,
          temperature: parseInt(response.main.temp),
          feelsLike: parseInt(response.main.feels_like),
          wind: parseInt(this.meterPerSecondToKilometerPerHour(response.wind.speed)),
          humidity: response.main.humidity,
        });
      });
  }
  componentDidMount() {
    this.fetchForecast("Paris");
  }
  onLocationSubmit = () => {
    const location = this.getLocationInput();
    this.fetchForecast(location);
  }

  render() {
    return (
      <main>
        <div className="location-input-container">
          <label for="location-input">Search another location:</label>
          <input id="location-input" type="text" placeholder="ex: Jieyang"></input>
          <button id="location-submit" type="button" onClick={this.onLocationSubmit}>Let's go</button>
        </div>
        <div className="card">
          <h1 id="location" className="forecast">{this.state.location}</h1>
          <p id="temperature" className="forecast">{this.state.temperature} °C</p>
          <p id="main-forecast" className="forecast">{this.state.main}</p>
          <ul>
            <li>
              <h2>Humidity</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              <p id="humidity" className="forecast">{this.state.humidity} %</p>
            </li>
            <li>
              <h2>Feels like</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
              <p id="feels-like" className="forecast">{this.state.feelsLike} °C</p>
            </li>
            <li>
              <h2>Wind speed</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
              <p id="wind" className="forecast">{this.state.wind} km/h</p>
            </li>
          </ul>
        </div>
      </main>
    )
  }
}

export default Main;