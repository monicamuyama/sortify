import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';
import '../styles/home.css'
import background from '../assets/background.jpg';
import image2 from '../logo.svg';
import image3 from '../logo.svg';

function Home() {
  return (
    <div className="home"
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      {/* Hero Section */}
      <header className="hero">
        <h1>Sortify</h1>
        <h2>Revolutionizing Waste Management</h2>
        <p>Efficient, sustainable, and rewarding recycling for everyone.</p>
      </header>

      {/* Sliding Info Section */}
      <section className="info-slider">
        <div className="slider">
          <div className="slide">
            <h3>Efficient Sorting</h3>
            <p>Boost your recycling with automated and intelligent waste categorization.</p>
          </div>
          <div className="slide">
            <h3>Leaderboard</h3>
            <p>Top recycler: John Doe - 1200 points</p>
            <p>Rank 2: Jane Smith - 1100 points</p>
          </div>
          <div className="slide">
            <h3>Join the Revolution</h3>
            <p>Start making a difference today by signing up with Sortify.</p>
          </div>
        </div>
      </section>
      <div className="cta-buttons">
          <Link to="/signin" className="cta-button">Sign In</Link>
          <Link to="/register" className="cta-button">Register</Link>
          <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </div>
  );
}

export default Home;
