import React, { useState } from 'react';
import { X, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleJoin = () => {
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/lrnsylogo.png" alt="Lrnsy" className="footer-logo-image" />
              {/* <span className="footer-tagline">CONNECTING THE DOTS</span> */}
            </div>
            <p className="footer-description">
              Lrnsy is human-led operating system for personalised education.
            </p>
            <div className="social-links">
              <a href="#" className="social-link social-square">
                <X size={16} />
              </a>
              <a href="#" className="social-link social-square">
                <Linkedin size={16} />
              </a>
              <a href="#" className="social-link social-square">
                <Instagram size={16} />
              </a>
            </div>
            <div className="footer-legal-links">
              <a href="#terms">Terms and Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#refund">Refund Policy</a>
            </div>
            <div className="copyright">
              © 2026 Lrnsy. All rights reserved.
            </div>
          </div>
          
          <div className="footer-right">
            <div className="newsletter">
              <h3 className="newsletter-title">Stay updated</h3>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                />
                <button onClick={handleJoin} className="join-btn">Join</button>
              </div>
              <p className="newsletter-description">
                Join educators in shaping future of learning.
              </p>
            </div>
                        <div className="system-status">
              <span className="status-dot"></span>
              <span className="status-text">All systems operational</span>
            </div>
            <button onClick={scrollToTop} className="scroll-to-top">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
