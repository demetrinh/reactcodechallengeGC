import React from "react";
// import Axios from "axios";

interface ResultProps {
  weatherResult: any;
}

// need to get the city name, description(called weather in api), current temp, feels like, and wind speed

export const Result: React.FC<ResultProps> = ({ weatherResult }) => {
  // write a api call to retrieve the weather

  // Import that function

  // pass the inputvalue to the function

  // display the results

  if (!weatherResult) {
    return null;
  }
  let cityName = weatherResult.name;
  let iconCode = weatherResult.weather[0].icon;
  let iconurl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // let description = weatherResult.weather[0].description;
  // let temp = weatherResult.main.temp;
  // let feels = weatherResult.main.feels_like;
  // let wind = weatherResult.wind.speed;

  return (
    <div className="resultsBox">
      <br />
      <br />
      <span className="city-name"> {cityName}</span>{" "}
      <img src={iconurl} alt="Weather icon"></img>
      <br />
      <br />
      Description: {weatherResult.weather[0].description}
      <br />
      Current temp: {weatherResult.main.temp} °F
      <br />
      Feels like: {weatherResult.main.feels_like} °F
      <br />
      Wind speed: {weatherResult.wind.speed} mph
    </div>
  );
};
