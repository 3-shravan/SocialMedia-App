import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Footer from "../components/Footer";

function LandingPage() {

  const navigate=useNavigate();
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">Connectify</h1>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn login" onClick={()=>navigate('/login')}>Login</button>
          <button className="btn signup" onClick={()=>navigate('/register')}>Sign Up</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Stay Connected with <span>Connectify</span></h2>
          <p className="hero-description">Your ultimate social media experience, streamlined and stylish.</p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
