import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Game from './Component/Game';
import Shop from './Component/Shop';
import Contact from './Component/Contact';
import './App.css';
import Footer from './Footer';
import Navbar from './Component/Navbar';
import Blog from './Blog';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/game' element={<Game />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
