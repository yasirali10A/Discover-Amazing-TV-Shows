import React from 'react';
import { FaSearch, FaRedo } from 'react-icons/fa';
import { Button } from './Button';
import './EmptyState.css';

export const EmptyState = ({ onReset, isFavoritesMode = false }) => {
  return (
    <div className="empty-container animate-fade-in">
      <div className="empty-card">
        <div className="empty-icon-wrapper">
          <FaSearch className="empty-icon" />
        </div>

        <h3 className="empty-heading">
          {isFavoritesMode ? 'No Favorites Saved' : 'No TV shows found.'}
        </h3>

        <p className="empty-subtext">
          {isFavoritesMode
            ? 'Click the heart icon on any TV show card to add it to your favorite list.'
            : 'We couldn’t find any TV shows matching your current search query or filter criteria.'}
        </p>

        <Button variant="secondary" icon={<FaRedo />} onClick={onReset}>
          {isFavoritesMode ? 'Show All TV Shows' : 'Clear Search & Filters'}
        </Button>
      </div>
    </div>
  );
};
