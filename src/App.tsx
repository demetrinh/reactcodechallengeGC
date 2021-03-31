import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { Result } from "./Result";

function App() {
  // Both values below comes from the useState hook being called
  const [
    inputValue, // I want to make a react value that I can update called value
    setInputValue, // I want to update that value with this function
  ] = useState(""); // The param is the intial state of value. So here we are saying // make the value of the input an empty string
  const [weatherResult, setWeatherResult] = useState(null);

  return (
    <div className="App">
      <Header />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setWeatherResult={setWeatherResult}
      />
      <Result weatherResult={weatherResult} />
    </div>
  );
}

export default App;
