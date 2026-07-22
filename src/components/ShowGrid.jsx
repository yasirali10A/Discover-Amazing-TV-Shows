import React from 'react';
import { ShowCard } from './ShowCard';
import './ShowGrid.css';

export const ShowGrid = ({ shows, onSelectShow, isFavorite, onToggleFavorite }) => {
  return (
    <div className="show-grid">
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
          onSelectShow={onSelectShow}
          isFav={isFavorite(show.id)}
          onToggleFav={onToggleFavorite}
        />
      ))}
    </div>
  );
};
