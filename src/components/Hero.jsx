import React from 'react';
import { FaPlay, FaFire } from 'react-icons/fa';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-backdrop">
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <FaFire className="fire-icon" />
            <span>Top Rated & Trending Shows</span>
          </div>

          <h1 className="hero-title">
            Discover Amazing <span className="text-red">TV Shows</span>
          </h1>

          <p className="hero-subtitle">
            Search thousands of TV shows instantly. Explore ratings, premiere dates, detailed summaries, and official stream info.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">100+</span>
              <span className="stat-label">Featured Shows</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">HD</span>
              <span className="stat-label">Full Details</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">Free</span>
              <span className="stat-label">TVMaze API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
