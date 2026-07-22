import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch top/all TV shows from TVMaze
 * Returns array of show objects
 */
export const fetchShows = async () => {
  const response = await apiClient.get('/shows');
  // Return first 100 shows as requested by PRD
  return response.data.slice(0, 100);
};

/**
 * Search TV shows by query string
 * TVMaze returns array of objects with structure: [{ score: number, show: { ... } }]
 */
export const searchShows = async (query) => {
  if (!query || query.trim() === '') {
    return fetchShows();
  }
  const response = await apiClient.get(`/search/shows?q=${encodeURIComponent(query.trim())}`);
  // Extract and normalize the show objects from search results
  return response.data.map((item) => item.show);
};

/**
 * Fetch detailed single show information by ID
 */
export const fetchShowById = async (id) => {
  const response = await apiClient.get(`/shows/${id}`);
  return response.data;
};
