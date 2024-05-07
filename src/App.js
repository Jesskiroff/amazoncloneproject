import React from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';

function App() {
  return (
    <div className="app">
    <Header/>
    <Home />
    {/* Home component */}
    </div>
  );
}

export default App;