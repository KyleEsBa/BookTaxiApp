import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Ube</h1>
          <p>Your trusted partner for reliable and affordable taxi services</p>
          <Link to="/book" className="cta-button">
            Book a Ride Now
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Reliable</h3>
            <p>Get picked up quickly with our efficiently managed fleet</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable Pricing</h3>
            <p>Competitive rates with transparent pricing, no hidden charges</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍✈️</div>
            <h3>Professional Drivers</h3>
            <p>Trained and courteous drivers committed to your safety</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Booking</h3>
            <p>Simple online booking process that takes just minutes</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Active Drivers</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </section>
    </div>
  );
}
