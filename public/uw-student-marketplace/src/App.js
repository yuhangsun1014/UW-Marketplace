import React from "react";
import TestAuth from "./testAuth";
import {BrowserRouter as  Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import ContactSellerPage from './pages/ContactSellerPage';
import Books from './pages/Books';
import Furniture from './pages/Furniture';
import Electronics from "./pages/Electronics";
import Stationery from "./pages/Stationery";
import Bags from "./pages/Bags";
import LabEquipment from "./pages/LabEquipment";

import "./App.css"
import SellItemPage from "./pages/SellItemPage";

function App() {
  return (
    
    <Router>
    <Header />
    <div>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/ContactSellerPage" element={<ContactSellerPage/>}/>
          <Route path="/Books" element={<Books/>}/>
          <Route path="/Furniture" element={<Furniture/>}/>
          <Route path="/Electronics" element={<Electronics/>}/>
          <Route path="/Stationery" element={<Stationery/>}/>
          <Route path="/Bags" element={<Bags/>}/>
          <Route path="/LabEquipment" element={<LabEquipment/>}/>
          <Route path="/SellItemPage" element={<SellItemPage/>}/>

          
          
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