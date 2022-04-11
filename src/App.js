import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ef024b1ad2d5e8fe23ee3fb36a14f82e`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed(2)}°F</h1> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{((data.main.temp.toFixed()-32)*0.5556).toFixed(2)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          <div className="bottommain">



          {data.name !== undefined &&
          <div className="bottommainm" >
            <div >
              {data.main ? <p className='bold'>{(((data.main.feels_like)-32)*0.5556).toFixed(2)}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div >
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed(2)}°F</p> : null}
              <p>Feels Like</p>
            </div><hr />
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity.toFixed(2)}%</p> : null}
              <p>Humidity</p>
            </div><hr />
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed(2)} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{(data.wind.speed.toFixed()*1.61).toFixed(2)} KPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
          </div>
        </div> 
    
      </div>
    </div>
  );
}

export default App;
