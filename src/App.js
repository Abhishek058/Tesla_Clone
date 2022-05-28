import React from "react";
import { Counter } from "./features/counter/Counter";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return <div className="App">
    <Header />
    <Home />
  </div>;
}

export default App;
