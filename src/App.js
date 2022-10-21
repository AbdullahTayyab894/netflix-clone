import './App.css';
import React, { useState } from "react";
import Cards from './component/card'
import Card1 from './component/card1'
import Card2 from './component/card2'
import Card3 from './component/card3'
import Navbar from './component/Navbar.js'
import Faq from './component/faq';
import Footer from './component/footer';
import Partical from './component/partical'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Card1 />
      <Card2 />
      <Card3 />
      <Faq />
      <Footer />
    </div>

  );
}

export default App;
