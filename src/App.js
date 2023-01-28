import React from "react";
import Clock from "./components/Clock";
import { InputElement } from "./components/InputElement";
import Training from "./components/Training";

function App() {
  return (
    <div>
      <Clock timer="1000" />
      <Clock timer="2000" />
      <Clock timer="5000" />
      <InputElement />

    </div>
  );
}

export default App;