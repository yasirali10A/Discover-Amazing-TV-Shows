import React, { useState } from 'react';
import { FaStar, FaHeart, FaRegHeart, FaCalendarAlt, FaGlobe, FaPlay } from 'react-icons/fa';
import { formatPremiereDate, formatRating, DEFAULT_POSTER } from '../utils/formatters';
import './ShowCard.css';

export const ShowCard = ({ show, onSelectShow, isFav, onToggleFav }) => {
  const [imgError, setImgError] = useState(false);

  const posterSrc = !imgError && show.image?.medium
    ? show.image.medium
    : !imgError && show.image?.original
    ? show.image.original
    : DEFAULT_POSTER;

  const rating = formatRating(show.rating);
  const premiereYear = formatPremiereDate(show.premiered);
  const status = show.status || 'Unknown';
  const genres = show.genres && show.genres.length > 0 ? show.genres.slice(0, 2) : ['General'];

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFav(show.id);
  };

  return (
    <div className="show-card animate-fade-in" onClick={() => onSelectShow(show)}>
      {/* Poster Container */}
      <div className="card-poster-wrapper">
        <img
          src={posterSrc}
          alt={show.name}
          className="card-poster"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        {/* Dark Gradient Overlay on Hover */}
        <div className="card-poster-overlay">
          <button className="quick-view-btn" type="button">
            <FaPlay className="play-icon" /> Details
          </button>
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          className={`favorite-badge ${isFav ? 'fav-active' : ''}`}
          onClick={handleFavoriteClick}
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>

        {/* Status Badge */}
        <span className={`status-badge status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
          {status}
        </span>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header-meta">
          {/* Rating */}
          <div className="card-rating">
            <FaStar className="star-icon" />
            <span>{rating}</span>
          </div>

          {/* Premiere Year */}
          <div className="card-year">
            <FaCalendarAlt className="meta-icon" />
            <span>{premiereYear}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="card-title" title={show.name}>
          {show.name}
        </h3>

        {/* Genres */}
        <div className="card-genres">
          {genres.map((g) => (
            <span key={g} className="genre-pill">
              {g}
            </span>
          ))}
        </div>

        {/* Language */}
        <div className="card-footer-meta">
          <span className="card-language">
            <FaGlobe className="meta-icon" /> {show.language || 'English'}
          </span>
        </div>
      </div>
    </div>
  );
};
