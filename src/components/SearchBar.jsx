import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({ searchInput, setSearchInput, totalResults = 0 }) => {
  const handleClear = () => {
    setSearchInput('');
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-input-container">
        <FaSearch className="search-icon" />

        <input
          type="text"
          className="search-input"
          placeholder="Search TV Shows..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          aria-label="Search TV Shows"
        />

        {searchInput && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {searchInput && (
        <div className="search-status">
          Showing results for "<span className="search-query">{searchInput}</span>"
        </div>
      )}
    </div>
  );
};
