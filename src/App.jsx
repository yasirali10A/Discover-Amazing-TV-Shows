import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchShows, searchShows } from './services/api';
import { useDebounce } from './hooks/useDebounce';
import { useFavorites } from './hooks/useFavorites';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { ShowGrid } from './components/ShowGrid';
import { ShowModal } from './components/ShowModal';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search state
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  // Filter & Sort state
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  // Selected Show for Modal
  const [selectedShow, setSelectedShow] = useState(null);

  // Favorites Hook
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  // Primary API Load Function
  const loadShows = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (debouncedSearch.trim()) {
        data = await searchShows(debouncedSearch);
      } else {
        data = await fetchShows();
      }
      setShows(data || []);
    } catch (err) {
      console.error('Error fetching TV shows:', err);
      setError(err.message || 'Failed to fetch TV shows from API');
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch]);

  // Execute API call on mount & whenever debounced search query changes
  useEffect(() => {
    loadShows();
  }, [loadShows]);

  // Extract unique genres for filter dropdown
  const availableGenres = useMemo(() => {
    const genreSet = new Set();
    shows.forEach((show) => {
      if (show.genres && Array.isArray(show.genres)) {
        show.genres.forEach((g) => genreSet.add(g));
      }
    });
    return Array.from(genreSet).sort();
  }, [shows]);

  // Extract unique languages for filter dropdown
  const availableLanguages = useMemo(() => {
    const langSet = new Set();
    shows.forEach((show) => {
      if (show.language) {
        langSet.add(show.language);
      }
    });
    return Array.from(langSet).sort();
  }, [shows]);

  // Computed & Filtered Shows Array
  const filteredShows = useMemo(() => {
    return shows
      .filter((show) => {
        // Genre filter
        if (selectedGenre !== 'All') {
          if (!show.genres || !show.genres.includes(selectedGenre)) {
            return false;
          }
        }

        // Language filter
        if (selectedLanguage !== 'All') {
          if (show.language !== selectedLanguage) {
            return false;
          }
        }

        // Favorites filter
        if (favoritesOnly) {
          if (!favorites.includes(show.id)) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating-desc') {
          return (b.rating?.average || 0) - (a.rating?.average || 0);
        }
        if (sortBy === 'rating-asc') {
          return (a.rating?.average || 0) - (b.rating?.average || 0);
        }
        if (sortBy === 'name-asc') {
          return (a.name || '').localeCompare(b.name || '');
        }
        if (sortBy === 'name-desc') {
          return (b.name || '').localeCompare(a.name || '');
        }
        if (sortBy === 'date-desc') {
          return (b.premiered || '').localeCompare(a.premiered || '');
        }
        if (sortBy === 'date-asc') {
          return (a.premiered || '').localeCompare(b.premiered || '');
        }
        return 0;
      });
  }, [shows, selectedGenre, selectedLanguage, favoritesOnly, favorites, sortBy]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedGenre('All');
    setSelectedLanguage('All');
    setSortBy('rating-desc');
    setFavoritesOnly(false);
  };

  const handleToggleFavoritesNav = () => {
    setFavoritesOnly((prev) => !prev);
  };

  return (
    <div className="app-layout">
      {/* Navbar */}
      <Navbar
        favoriteCount={favorites.length}
        onToggleFavorites={handleToggleFavoritesNav}
        favoritesOnly={favoritesOnly}
      />

      {/* Hero Banner */}
      <Hero />

      {/* Main Explorer Section */}
      <main className="container main-content">
        {/* Search Bar */}
        <SearchBar
          searchInput={search}
          setSearchInput={setSearch}
          totalResults={filteredShows.length}
        />

        {/* Filter and Sort Bar */}
        {!error && (
          <FilterBar
            genres={availableGenres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            languages={availableLanguages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onResetFilters={handleResetFilters}
            resultCount={filteredShows.length}
          />
        )}

        {/* Content Render Conditionals */}
        {loading ? (
          <Loading message={debouncedSearch ? `Searching for "${debouncedSearch}"...` : 'Loading TV Shows...'} />
        ) : error ? (
          <Error onRetry={loadShows} message={error} />
        ) : filteredShows.length === 0 ? (
          <EmptyState onReset={handleResetFilters} isFavoritesMode={favoritesOnly && favorites.length === 0} />
        ) : (
          <ShowGrid
            shows={filteredShows}
            onSelectShow={setSelectedShow}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>

      {/* Show Details Modal */}
      {selectedShow && (
        <ShowModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
          isFav={isFavorite(selectedShow.id)}
          onToggleFav={toggleFavorite}
        />
      )}

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
