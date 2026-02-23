import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? 'navbar-open' : ''}`}>
      <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
        Dr. Sammy Wu
      </NavLink>

      <button
        type="button"
        className="navbar-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <ul className="navbar-links">
        <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/cancer-rehabilitation" onClick={closeMenu}>What is Cancer Rehabilitation?</NavLink></li>
        <li><NavLink to="/research" onClick={closeMenu}>Research</NavLink></li>
        <li><NavLink to="/appointment" className="nav-cta" onClick={closeMenu}>Make an Appointment</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
