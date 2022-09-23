import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product';
import Products from './Products'
import Notfound from './Notfound';
 
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        
       
        <Route path="/products" element={<Products />} />
      
        <Route path="/products/:id" element ={<Product />} />
       
        <Route path="*" element={<Notfound />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default Index;
