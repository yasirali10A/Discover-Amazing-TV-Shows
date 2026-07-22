import React, { useState, useEffect } from 'react';
import { FaTv, FaGithub, FaHeart } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = ({ favoriteCount = 0, onToggleFavorites, favoritesOnly = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <FaTv className="logo-icon" />
          </div>
          <span className="logo-text">
            TV <span className="logo-highlight">Explorer</span>
          </span>
        </a>

        {/* Actions */}
        <div className="navbar-actions">
          {/* Favorites shortcut toggle */}
          <button
            className={`fav-nav-btn ${favoritesOnly ? 'active' : ''}`}
            onClick={onToggleFavorites}
            title={favoritesOnly ? 'Show All Shows' : 'Show Favorites'}
          >
            <FaHeart className="fav-icon" />
            <span className="fav-label">Favorites</span>
            {favoriteCount > 0 && <span className="fav-badge">{favoriteCount}</span>}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="github-nav-link"
            aria-label="GitHub Repository"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};
