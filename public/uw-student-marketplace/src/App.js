import React from "react";
import {BrowserRouter as  Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import MiddleSection from "./components/MiddleSection";
import ContactSellerPage from './pages/ContactSellerPage';
import Books from './pages/Books';
import Furniture from './pages/Furniture';
import Electronics from "./pages/Electronics";
import Stationery from "./pages/Stationery";
import Bags from "./pages/Bags";
import LabEquipment from "./pages/LabEquipment";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";


import "./App.css"
import SellItemPage from "./pages/SellItemPage";
import UserProfilePage from "./pages/UserProfilePage";
import ItemPostedPage from "./pages/ItemPostedPage";

//Removed the buttom search box, it is duplicated with the top one
function App() {
  return (
    
    <Router>
        <Header />
    
        <Routes>
          <Route path="/" element={<Home/>}/>
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
          <Route path="/UserProfilePage" element={<UserProfilePage/>}/>
          <Route path="/ProductInfo/:name" element={<ProductInfo/>}/>
          <Route path="/SellItemPage/ItemPostedPage" element={<ItemPostedPage/>}/>
        </Routes>
  
      <Footer />
  
    </Router>
  );
}

export default App;