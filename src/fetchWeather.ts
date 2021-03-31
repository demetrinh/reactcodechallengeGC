import Axios from "axios";

const apiKey = "a3d8ad47ac60a5284b72963a56c392a1";

export const fetchWeather = async (city: string) => {
  const weatherResponse = await Axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );

  return weatherResponse;
};
