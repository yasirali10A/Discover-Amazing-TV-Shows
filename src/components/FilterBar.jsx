import React from 'react';
import { FaFilter, FaSortAmountDown, FaGlobe, FaRedo } from 'react-icons/fa';
import './FilterBar.css';

export const FilterBar = ({
  genres = [],
  selectedGenre,
  setSelectedGenre,
  languages = [],
  selectedLanguage,
  setSelectedLanguage,
  sortBy,
  setSortBy,
  onResetFilters,
  resultCount = 0,
}) => {
  const hasActiveFilters = selectedGenre !== 'All' || selectedLanguage !== 'All' || sortBy !== 'rating-desc';

  return (
    <div className="filter-bar">
      <div className="filter-left">
        {/* Genre Selector */}
        <div className="filter-group">
          <label htmlFor="genre-select" className="filter-label">
            <FaFilter className="icon-sm" /> Genre:
          </label>
          <select
            id="genre-select"
            className="filter-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="All">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Language Selector */}
        <div className="filter-group">
          <label htmlFor="lang-select" className="filter-label">
            <FaGlobe className="icon-sm" /> Language:
          </label>
          <select
            id="lang-select"
            className="filter-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="All">All Languages</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Selector */}
        <div className="filter-group">
          <label htmlFor="sort-select" className="filter-label">
            <FaSortAmountDown className="icon-sm" /> Sort By:
          </label>
          <select
            id="sort-select"
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating-desc">Highest Rating ⭐</option>
            <option value="rating-asc">Lowest Rating</option>
            <option value="name-asc">Name (A - Z)</option>
            <option value="name-desc">Name (Z - A)</option>
            <option value="date-desc">Newest Release</option>
            <option value="date-asc">Oldest Release</option>
          </select>
        </div>
      </div>

      <div className="filter-right">
        {hasActiveFilters && (
          <button type="button" className="reset-filter-btn" onClick={onResetFilters}>
            <FaRedo className="icon-sm" /> Reset Filters
          </button>
        )}

        <div className="result-counter">
          <span>{resultCount}</span> shows found
        </div>
      </div>
    </div>
  );
};
