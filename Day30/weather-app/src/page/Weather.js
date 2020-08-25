import React from "react";

const Weather = ({ details }) => {
  const {
    humidity,
    temperature,
    weatherMode,
    weatherurl,
    windspeed,
    country,
    name,
  } = details;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-md-4 ">
            <br />
            <br />
            <img
              width="300"
              className="rounded-circle"
              height="300"
              src={weatherurl}
              alt=""
            />
          </div>
          <div className="col col-md-8 ">
            <h1>Weather Details</h1>
            <br />
            <h2>WeatherMode:{weatherMode}</h2> <br />
            <h2>Country: {country} </h2>
            <br />
            <h2>CityName: {name} </h2> <br />
            <div className="row">
              <div className="col col-md-3">
                <span>Humidity: {humidity}°C </span>
              </div>
              <div className="col col-md-4">
                <span>Temperature: {temperature}°C </span>
              </div>
              <div className="col col-md-4">
                <span>WindSpeed: {windspeed}km/hr </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
