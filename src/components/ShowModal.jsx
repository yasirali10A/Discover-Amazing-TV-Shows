import React, { useEffect, useState } from 'react';
import {
  FaTimes,
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaExternalLinkAlt,
  FaHeart,
  FaRegHeart,
  FaTv,
  FaTag,
} from 'react-icons/fa';
import { formatPremiereDate, formatRating, stripHtml, DEFAULT_POSTER } from '../utils/formatters';
import { Button } from './Button';
import './ShowModal.css';

export const ShowModal = ({ show, onClose, isFav, onToggleFav }) => {
  const [imgError, setImgError] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!show) return null;

  const posterSrc = !imgError && show.image?.original
    ? show.image.original
    : !imgError && show.image?.medium
    ? show.image.medium
    : DEFAULT_POSTER;

  const rating = formatRating(show.rating);
  const premiereDate = show.premiered || 'N/A';
  const cleanSummary = stripHtml(show.summary);
  const genres = show.genres || [];
  const networkName = show.network?.name || show.webChannel?.name || 'N/A';
  const runtime = show.runtime ? `${show.runtime} min/ep` : 'N/A';
  const officialSite = show.officialSite || show.url;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        {/* Modal Hero / Header Banner */}
        <div className="modal-hero">
          <img
            src={posterSrc}
            alt={show.name}
            className="modal-bg-image"
            onError={() => setImgError(true)}
          />
          <div className="modal-hero-overlay"></div>

          <div className="modal-hero-content">
            <div className="modal-poster-box">
              <img
                src={posterSrc}
                alt={show.name}
                className="modal-poster"
                onError={() => setImgError(true)}
              />
            </div>

            <div className="modal-header-info">
              <div className="modal-badges">
                <span className={`modal-status-badge status-${(show.status || '').toLowerCase().replace(/\s+/g, '-')}`}>
                  {show.status || 'Active'}
                </span>
                <span className="modal-type-badge">{show.type || 'Scripted'}</span>
              </div>

              <h2 className="modal-title">{show.name}</h2>

              <div className="modal-quick-meta">
                <div className="modal-rating">
                  <FaStar className="star-icon" />
                  <span>{rating} / 10</span>
                </div>

                <div className="meta-divider">•</div>

                <div className="modal-meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{premiereDate}</span>
                </div>

                <div className="meta-divider">•</div>

                <div className="modal-meta-item">
                  <FaClock className="meta-icon" />
                  <span>{runtime}</span>
                </div>

                <div className="meta-divider">•</div>

                <div className="modal-meta-item">
                  <FaGlobe className="meta-icon" />
                  <span>{show.language || 'English'}</span>
                </div>
              </div>

              {/* Genre Pills */}
              <div className="modal-genres">
                {genres.map((g) => (
                  <span key={g} className="modal-genre-tag">
                    <FaTag className="tag-icon" /> {g}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="modal-action-bar">
                {officialSite && (
                  <a
                    href={officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-website-link"
                  >
                    <Button variant="primary" icon={<FaExternalLinkAlt />}>
                      Official Website
                    </Button>
                  </a>
                )}

                <Button
                  variant={isFav ? 'secondary' : 'outline'}
                  icon={isFav ? <FaHeart style={{ color: '#E50914' }} /> : <FaRegHeart />}
                  onClick={() => onToggleFav(show.id)}
                >
                  {isFav ? 'In Favorites' : 'Add to Favorites'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          <div className="modal-section">
            <h3 className="section-title">Story Overview</h3>
            <p className="modal-summary-text">{cleanSummary}</p>
          </div>

          <div className="modal-details-grid">
            <div className="detail-box">
              <span className="detail-label">Network / Streamer</span>
              <span className="detail-value">
                <FaTv className="detail-icon" /> {networkName}
              </span>
            </div>

            <div className="detail-box">
              <span className="detail-label">Language</span>
              <span className="detail-value">{show.language || 'English'}</span>
            </div>

            <div className="detail-box">
              <span className="detail-label">Premiered Date</span>
              <span className="detail-value">{premiereDate}</span>
            </div>

            <div className="detail-box">
              <span className="detail-label">Status</span>
              <span className="detail-value">{show.status || 'N/A'}</span>
            </div>

            <div className="detail-box">
              <span className="detail-label">Average Runtime</span>
              <span className="detail-value">{show.runtime ? `${show.runtime} minutes` : 'N/A'}</span>
            </div>

            <div className="detail-box">
              <span className="detail-label">Schedule</span>
              <span className="detail-value">
                {show.schedule?.days?.join(', ') || 'N/A'}{' '}
                {show.schedule?.time ? `@ ${show.schedule.time}` : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
