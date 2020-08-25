import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Weather from "./page/Weather";
import { toast } from "react-toastify";

function App() {
  const [data, setData] = useState({
    humidity: "",
    temperature: "",
    weatherMode: "",
    weatherurl: "",
    windspeed: "",
    country: "",
    name: "",
    error: false,
  });
  const [city, setCity] = useState("madurai");
  const fetchApi = () => {
    Axios.get(
      `http://api.weatherstack.com/current?access_key=0a283bc1c8db31707d25636f64e310a4&query=${city}`
    )
      .then((res) => {
        console.log(res);

        if (res.data.error) {
          setData({ error: true });
          toast("not able to locate user", { type: "error" });

          console.log("error");
        }
        setData(res);
        setData({
          humidity: res.data.current.humidity,
          temperature: res.data.current.temperature,
          weatherMode: res.data.current.weather_descriptions[0],
          weatherurl: res.data.current.weather_icons[0],
          windspeed: res.data.current.wind_speed,
          country: res.data.location.country,
          name: res.data.location.name,
          error: false,
        });
        console.log(data);
        console.log(res.data);

        setCity("");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      <h1 className="mt-5">
        Spart Weather App{" "}
        <img
          width="50"
          height="50"
          src="https://www.freepngimg.com/thumb/weather/23793-9-weather-photos-thumb.png"
          alt=""
        />{" "}
      </h1>
      <div className="col col-md-6 offset-3 mt-4">
        <div className="container">
          <div className="input-group sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your city Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="input-group-append">
              <span
                onClick={fetchApi}
                className="input-group-text"
                id="basic-addon2"
              >
                Fetch
              </span>
            </div>
          </div>
        </div>
      </div>
      <Weather details={data} />
    </div>
  );
}

export default App;
