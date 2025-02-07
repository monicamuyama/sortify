import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from './assets/background.jpg';
import Header from './pages/header'
import Footer from './pages/footer';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <Router>
      <Header/>  
      {/* Wrap Routes with Router */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route rendering Landing component */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
