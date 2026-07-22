import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'tv_explorer_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to load favorites from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (showId) => {
    setFavorites((prev) => {
      if (prev.includes(showId)) {
        return prev.filter((id) => id !== showId);
      } else {
        return [...prev, showId];
      }
    });
  };

  const isFavorite = (showId) => favorites.includes(showId);

  return { favorites, toggleFavorite, isFavorite };
}
