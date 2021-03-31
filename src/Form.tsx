import React from "react";
import { fetchWeather } from "./fetchWeather";

interface FormProps {
  inputValue: string;
  setInputValue: any;
  setWeatherResult: any;
}

export const Form: React.FC<FormProps> = ({
  inputValue,
  setInputValue,
  setWeatherResult,
}) => {
  const handleFetchWeather = async (city: string) => {
    if (city) {
      const weatherAPIResponse = await fetchWeather(city);
      setWeatherResult(weatherAPIResponse.data);
      console.log(setWeatherResult);
    }
  };

  return (
    <div className="formBox">
      <p className="city-text">City</p>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your city"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleFetchWeather(inputValue);
          }
        }}
      ></input>
      <button
        type="submit"
        onClick={() => {
          handleFetchWeather(inputValue);
        }}
      >
        Search
      </button>
    </div>
  );
};
