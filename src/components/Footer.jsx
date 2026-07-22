import React from 'react';
import { FaTv, FaHeart, FaGithub } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <FaTv className="footer-logo-icon" />
            <span>TV <span className="text-red">Explorer</span></span>
          </div>
          <p className="footer-tagline">
            Your ultimate hub for searching, discovering, and tracking top TV shows worldwide.
          </p>
        </div>

        <div className="footer-info">
          <p className="footer-credits">
            Made with <FaHeart className="heart-icon" /> using <strong>React 19 + Vite</strong>
          </p>
          <p className="footer-api">
            Powered by <a href="https://www.tvmaze.com/api" target="_blank" rel="noopener noreferrer">TVMaze API</a>
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TV Show Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
