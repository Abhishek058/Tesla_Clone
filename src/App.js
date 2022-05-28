import React from "react";
import { Counter } from "./features/counter/Counter";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import Section from "./Components/Section";

function App() {
  return <div className="App">
    <Header />
    <Home />
    <Section />
  </div>;
}

export default App;
