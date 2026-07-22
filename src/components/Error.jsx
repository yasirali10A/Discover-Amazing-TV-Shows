import React from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';
import { Button } from './Button';
import './Error.css';

export const Error = ({ onRetry, message }) => {
  return (
    <div className="error-container animate-fade-in">
      <div className="error-card">
        <div className="error-icon-wrapper">
          <FaExclamationTriangle className="error-icon" />
        </div>

        <h2 className="error-heading">Oops!</h2>

        <p className="error-message">
          {message || 'Something went wrong while fetching TV shows.'}
          <br />
          Please try again.
        </p>

        <Button variant="primary" size="lg" icon={<FaRedo />} onClick={onRetry}>
          Retry
        </Button>
      </div>
    </div>
  );
};
