/**
 * Clean and strip HTML tags from summary string
 */
export const stripHtml = (htmlString) => {
  if (!htmlString) return 'No description available for this TV show.';
  return htmlString.replace(/<[^>]*>?/gm, '').trim();
};

/**
 * Format premiere date to readable year or date
 */
export const formatPremiereDate = (dateString) => {
  if (!dateString) return 'Unknown';
  const year = dateString.split('-')[0];
  return year || dateString;
};

/**
 * Format rating (0 to 10) into formatted string
 */
export const formatRating = (ratingObj) => {
  if (!ratingObj || !ratingObj.average) return 'N/A';
  return ratingObj.average.toFixed(1);
};

/**
 * Fallback SVG image as data URI for missing poster images
 */
export const DEFAULT_POSTER = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450" fill="none">
  <rect width="300" height="450" fill="#1f1f1f"/>
  <rect x="20" y="20" width="260" height="410" rx="12" stroke="#333333" stroke-width="2" stroke-dasharray="8 8"/>
  <circle cx="150" cy="180" r="45" fill="#2a2a2a" stroke="#E50914" stroke-width="3"/>
  <path d="M135 165L170 180L135 195V165Z" fill="#E50914"/>
  <text x="150" y="260" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">TV EXPLORER</text>
  <text x="150" y="290" font-family="system-ui, sans-serif" font-size="14" fill="#a8a8a8" text-anchor="middle">Poster Unavailable</text>
</svg>
`)}`;
