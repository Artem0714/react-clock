import React from "react";
import Calculator from "./components/Calculator";
import Clock from "./components/Clock";
import TemperatureInput from "./components/TemperatureInput";

function App() {
  return (
    <div>
      <Clock timer="1000" />
      <Clock timer="2000" />
      <Clock timer="5000" />
      <Calculator />
    </div>
  );
}

export default App;