# 📺 TV Show Explorer – React + Vite

A modern, responsive, Netflix-inspired web application for searching and exploring TV shows using the public **TVMaze API**. Built with **React 19**, **Vite**, **Axios**, and **Vanilla CSS**.

🔗 **Live Demo**: [https://discover-amazing-tv-shows.vercel.app/](https://discover-amazing-tv-shows.vercel.app/)  
📦 **GitHub Repository**: [https://github.com/yasirali10A/Discover-Amazing-TV-Shows](https://github.com/yasirali10A/Discover-Amazing-TV-Shows)

![TV Show Explorer Header](https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop)

---

## 🌟 Key Features

- **🎬 Live TV Show Fetching**: Retrieves top 100 TV shows on startup using TVMaze API (`GET /shows`).
- **🔍 Debounced Real-time Search**: Debounced search input (300ms delay) that queries TVMaze search endpoint (`GET /search/shows?q=query`) dynamically with case-insensitive matching.
- **✨ Netflix-Inspired Dark Theme**: Premium aesthetic featuring `#E50914` primary red accents, glassmorphism headers, scale & shadow card animations, and modal overlays.
- **🎨 Filter & Sort System**:
  - Filter by **Genre** (Action, Drama, Comedy, Sci-Fi, etc.)
  - Filter by **Language** (English, Japanese, Spanish, etc.)
  - Sort by **Rating** (Highest/Lowest), **Name** (A-Z / Z-A), and **Premiere Date**
  - Reset filters with a single click
- **❤️ LocalStorage Favorites**: Bookmark favorite TV shows with heart toggle; filter and view saved favorites instantly.
- **📊 Show Details Modal**: Click any show card to reveal a rich modal dialog containing backdrop image, star ratings, premiere year, episode runtime, network info, full sanitized overview, and official streaming site link.
- **⏳ Skeleton Loading & Spinners**: Smooth loading state with skeleton cards matching the 4-column desktop layout.
- **⚠️ Friendly Error Handling & Retry**: Clear error screen with `⚠️` icon and an interactive **Retry** button for network failures.
- **🔍 Empty State**: Clean fallback display with `🔍` icon when no shows match the search query.
- **📱 Fully Responsive**: 4 columns on desktop, 2 columns on tablet, 1 column on mobile viewports.
- **⬆️ Back to Top**: Smooth scrolling floating button that appears on scroll down.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Icons**: React Icons (`fa` set)
- **Styling**: Modern Modular Vanilla CSS with CSS Variables & Glassmorphism
- **API**: [TVMaze API](https://www.tvmaze.com/api) (No authentication required)
- **Deployment**: Netlify / Vercel ready

---

## 📁 Folder Structure

```
week1-task2/
├── public/
├── src/
│   ├── assets/          # Static assets & fallbacks
│   ├── components/      # Modular React UI components
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── SearchBar.jsx / SearchBar.css
│   │   ├── FilterBar.jsx / FilterBar.css
│   │   ├── ShowGrid.jsx / ShowGrid.css
│   │   ├── ShowCard.jsx / ShowCard.css
│   │   ├── ShowModal.jsx / ShowModal.css
│   │   ├── Loading.jsx / Loading.css
│   │   ├── Error.jsx / Error.css
│   │   ├── EmptyState.jsx / EmptyState.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── BackToTop.jsx / BackToTop.css
│   │   └── Button.jsx / Button.css
│   ├── hooks/           # Custom React hooks
│   │   ├── useDebounce.js
│   │   └── useFavorites.js
│   ├── services/        # Axios API service
│   │   └── api.js
│   ├── utils/           # Helper formatters and fallback SVG poster
│   │   └── formatters.js
│   ├── App.jsx          # Main application orchestrator
│   ├── index.css        # Global design system & theme variables
│   └── main.jsx         # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Local Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yasirali10A/Discover-Amazing-TV-Shows.git
   cd Discover-Amazing-TV-Shows
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🌐 Live Deployment on Vercel

The application is deployed live on **Vercel**:

🔗 **Live URL**: [https://discover-amazing-tv-shows.vercel.app/](https://discover-amazing-tv-shows.vercel.app/)

### How to Deploy on Vercel:
1. Import your GitHub repository (`yasirali10A/Discover-Amazing-TV-Shows`) into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 📄 License

Made for Internship Project requirements. Powered by TVMaze API.
