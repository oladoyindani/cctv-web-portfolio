// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Page, we Offer the Best CCTV Services & Products. We are reliable and efficient.</h1>
          <p>Explore premium products and services with elegance.</p>
          <a href="/services" className="btn btn-gold mt-3">View Services</a>
        </div>
      </div>
      <div className="container section text-center">
        <h2 className="mb-4 text-warning">About Our Vision</h2>
        <p>
          We showcase premium goods and services with top-tier aesthetics and design.
        </p>
      </div>
    </>
  );
}

export default Home;
