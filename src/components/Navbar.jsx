import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/music">Music</Link></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      {/* Other header content */}
    </header>
  );
};

export default Navbar;