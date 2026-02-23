import { Link } from 'react-router-dom';
import './Page.css';

function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Dr. Sammy Wu</h1>
        <p className="hero-subtitle">
          Physical Medicine &amp; Rehabilitation · Cancer Rehabilitation
        </p>
        <p className="hero-tagline">
          Dedicated to improving functional outcomes and quality of life for patients during and after cancer treatment.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="button button-primary">Learn About Dr. Wu</Link>
          <Link to="/appointment" className="button button-secondary">Make an Appointment</Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
