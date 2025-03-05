import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header class="header">
         {/* Top navigation bar */}
        <div class="top-nav">
           {/* Logo */}
          <div class="logo">
            <img 
              src="../src/Assets/website_logo.jpg" 
              alt="market place logo" 
            />
          </div>
  
          {/* Search bar */}
          <div class="search-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search items"
              class="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

            />
            <button class="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            </form>
          </div>
  
            {/* Action buttons */}
          <div class="action-buttons">
            <button class="sell-button">
              Sell Items
            </button>
            <div class="auth-buttons">
              <button class="login-button">
                Log In
              </button>
              <button class="signup-button">
                Sign up
              </button>
            </div>
            <div class="user-profile">
              <div class="user-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="user-svg">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span class="username">John Doe</span>
            </div>
          </div>
        </div>
  
         {/* Navigation menu */}
        <nav class="main-nav">
          <ul class="nav-menu">
            <li class="nav-item">Books</li>
            <li class="nav-item">Furniture</li>
            <li class="nav-item">Electronics</li>
            <li class="nav-item">Stationery</li>
            <li class="nav-item">Bags</li>
            <li class="nav-item">Lab Equipments</li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;