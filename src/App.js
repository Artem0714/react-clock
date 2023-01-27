import React from "react";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <Clock timer="1000" />
      <Clock timer="2000" />
      <Clock timer="5000" />
    </div>
  );
}

export default App;
