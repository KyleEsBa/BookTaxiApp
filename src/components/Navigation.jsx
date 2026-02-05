import { Link } from 'react-router-dom';
import taxiIcon from '../assets/taxi-icon.svg';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={taxiIcon} alt="Taxi Icon" className="logo-icon" />
          Ube
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/book" className="nav-link book-btn">
              Book a Ride
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
