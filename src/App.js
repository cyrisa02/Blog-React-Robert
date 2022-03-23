import logo from "./logo.svg";
import "./App.css";
import Meal from "./Meal";
import Mealaxios from "./Mealaxios";
import React from 'react';
import ReactDOM from 'react-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bonsoir aux étudiants!!!</p>
      </header>
      <Meal/>
      <Mealaxios/>
    </div>
  );
}

export default App;
