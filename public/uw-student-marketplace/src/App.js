import React from "react";
import TestAuth from "./testAuth";
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css"

function App() {
  return (
    <Router>
    <div>
    
        <Routes>
          {/* <Route path="/testAuth" element={<TestAuth />} /> */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/" element={<Header/>}/>
          
          
        </Routes>


      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search..." />
        <button id="search-button">Search</button>
      </div>
      <Footer />
    </div >
    </Router>
  );
}

export default App;