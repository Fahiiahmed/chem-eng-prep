import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by equipment name, category, or keywords... (e.g., 'centrifugal', 'cavitation', 'heat exchanger')"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search equipment"
        />
        {searchQuery && (
          <button 
            className="clear-button"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      {searchQuery && (
        <p className="search-hint">
          Press Enter or type to search • ESC to clear
        </p>
      )}
    </div>
  );
}

export default SearchBar;