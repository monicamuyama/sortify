import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';
import Footer from '../pages/footer';
import image1 from '../logo.svg';
import image2 from '../logo.svg';
import image3 from '../logo.svg';

function Landing() {
  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <header className="App-nav">
        <div className="App-logo"> Sortify </div>
        <nav className="App-nav-links">
          <Link to="/landing" className="App-nav-link">About</Link>
          <Link to="/signup" className="App-nav-link">Sign Up</Link>
          <Link to="/signin" className="App-nav-link">Sign In</Link>
          <Link to="/donate" className="App-nav-link">Donate</Link>
        </nav>
      </header>

      {/* Main Content */}
      <header className="App-header">
        <h1 className="top">Sortify, revolutionalizing waste management with smart bins</h1>
        <p></p>
        
      </header>

      {/* Content Section */}
      <div className="content-container">
        <div className="content-item" style={{ backgroundImage: `url(${image1})` }}>
          <h2>UN statistics</h2>
          <p>According to the UN Environment program, 85 percent of single use plastics end up in land</p>
          
        </div>
        <div className="content-item" style={{ backgroundImage: `url(${image2})` }}>
          <h2>Watse Contamination Effect</h2>
          <p>Up to 30% of recyclables are contaminated, making them unrecyclable</p>
        </div>
        <div className="content-item" style={{ backgroundImage: `url(${image3})` }}>
          <h2>Need for waste Sorting</h2>
          <p>There’s an increasing need for effective waste sorting to reduce landfill waste and enhance recycling efforts
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
