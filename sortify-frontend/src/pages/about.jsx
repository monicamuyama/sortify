import React from 'react';
import '../styles/about.css'; // Add custom styles here

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Sortify</h1>
        <p>
          Empowering individuals and communities to manage waste responsibly while creating a cleaner, greener planet.
        </p>
      </header>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a future where waste is no longer a problem but a resource. By combining technology and community
          efforts, we aim to:
        </p>
        <ul>
          <li>Reduce environmental pollution.</li>
          <li>Encourage responsible waste disposal.</li>
          <li>Promote a circular economy where waste is transformed into valuable resources.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>How Sortify Works</h2>
        <ol>
          <li>
            <strong>Sort Your Waste:</strong> Separate your waste into categories like plastic, glass, metal, paper, and
            organic waste.
          </li>
          <li>
            <strong>Weigh and Submit:</strong> Use our integrated tools to weigh your waste and submit it through our
            platform.
          </li>
          <li>
            <strong>Earn Rewards:</strong> Receive incentives based on the type and weight of waste you submit.
          </li>
          <li>
            <strong>Make an Impact:</strong> Your efforts contribute to a cleaner environment and promote sustainable
            practices.
          </li>
        </ol>
      </section>

      <section className="about-section">
        <h2>Our Features</h2>
        <ul>
          <li>Smart Waste Sorting: AI-powered tools to help you identify and sort waste effectively.</li>
          <li>Incentive System: Earn rewards for every kilogram of recyclable waste you contribute.</li>
          <li>Educational Resources: Learn how to reduce, reuse, and recycle better with our guides and tutorials.</li>
          <li>
            Community Impact: Track your contributions and see how you’re helping your local community and the planet.
          </li>
        </ul>
      </section>

      <footer className="about-footer">
        <h2>Join Us in Making a Difference</h2>
        <p>
          By joining Sortify, you’re taking a stand for the environment and becoming part of a global community committed
          to sustainability. Together, we can reduce waste, conserve resources, and build a better future.
        </p>
        <button className="cta-button">Get Started Today</button>
      </footer>
    </div>
  );
};

export default About;
