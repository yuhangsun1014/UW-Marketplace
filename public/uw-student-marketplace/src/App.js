import React from "react";
import TestAuth from "./testAuth";
import {BrowserRouter as  Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import ContactSellerPage from './pages/ContactSellerPage';
import SellItemPage from './pages/SellItemPage'; // Import the page


import "./App.css"

function App() {
  return (
    
    <Router>
    <Header />
    <div>
    
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/ContactSellerPage" element={<ContactSellerPage/>}/>
          <Route path="/SellItemPage" element={<SellItemPage/>} />

          
          
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