import React from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' element= {<Header/>} />
            
            {/* <h1>I am a checkout page</h1> */}
          
          {/* <Route path='/'> */}
            {/* <Header/>
            <Home /> */}
          {/* </Route> */}
        </Routes>
        {/* Home component */}
     </div>
    </Router>
  );
}

export default App;
