import React from "react";
import TestAuth from "./testAuth";
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
    <div>
      <h1 id="title">UW Marketplace</h1>
      <h2 id="opening_tag">A Safe and Easy way to buy and sell at the University of Washington !</h2>
      

        <Routes>
          {/* <Route path="/testAuth" element={<TestAuth />} /> */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>


      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search..." />
        <button id="search-button">Search</button>
      </div>

    </div >
    </Router>
  );
}

export default App;