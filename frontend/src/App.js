import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [contentVisible, setContentVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(inputValue);
    setShowPopup(false);
    setTimeout(() => setContentVisible(true), 10);
  };

  const handleChangeName = () => {
    setInputValue('');
    setShowPopup(true);
    setContentVisible(false);
  };

  return (
    <div className="App">
      {showPopup && (
        <div className="modal-overlay">
          <form className="modal-card" onSubmit={handleSubmit}>
            <h2>Welcome!</h2>
            <p>Please enter your name:</p>
            <input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              required
              autoFocus
            />
            <br />
            <button className="fancy-btn" type="submit">Proceed</button>
          </form>
        </div>
      )}
      {!showPopup && (
        <div style={{opacity: contentVisible ? 1 : 0, transition: 'opacity 0.7s'}}>
          <nav className="navbar">
            <div className="navbar-logo">Rose Kanini Tech</div>
            <ul className="navbar-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <h1>Welcome {name}!</h1>
          <button 
            className="fancy-btn" 
            style={{marginBottom:'1rem', marginTop:'-12px'}} 
            onClick={handleChangeName}
          >
            Change Name
          </button>
          <hr />
          <section id="about" className="section-card">
            <h2>About Rose Kanini Tech</h2>
            <p>Rose Kanini Tech is an innovative technology solutions provider dedicated to helping businesses grow with modern software, automation, and cloud technologies. Our mission is to empower companies—big and small—with easy, affordable, and impactful digital tools.</p>
          </section>

          <section id="services" className="section-card">
            <h2>Our Services</h2>
            <ul className="services-list">
              <li>Custom Web and Mobile App Development</li>
              <li>Cloud & DevOps Solutions</li>
              <li>Business Process Automation</li>
              <li>IT Consulting & Strategy</li>
              <li>Technical Training & Workshops</li>
            </ul>
          </section>

          <section id="contact" className="section-card" style={{marginBottom:'2rem'}}>
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:contact@rosekaninitech.com">contact@rosekaninitech.com</a></p>
            <p>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
            <p>Location: 123 Tech Avenue, Silicon City, Country</p>
          </section>

          <footer className="footer">
            &copy; {new Date().getFullYear()} Rose Kanini Tech. All rights reserved.
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
