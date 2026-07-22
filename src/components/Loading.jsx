import React from 'react';
import './Loading.css';

export const Loading = ({ message = 'Loading TV Shows...' }) => {
  const dummySkeletons = Array.from({ length: 8 });

  return (
    <div className="loading-container animate-fade-in">
      {/* Central Spinner & Message */}
      <div className="spinner-header">
        <div className="netflix-spinner"></div>
        <p className="loading-text">{message}</p>
      </div>

      {/* Grid Skeleton Cards */}
      <div className="skeleton-grid">
        {dummySkeletons.map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton skeleton-poster"></div>
            <div className="skeleton-content">
              <div className="skeleton-line-meta">
                <div className="skeleton skeleton-pill"></div>
                <div className="skeleton skeleton-pill"></div>
              </div>
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-subtitle"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
