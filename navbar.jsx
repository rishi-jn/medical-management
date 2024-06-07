import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="C:\Users\rohit\OneDrive\Desktop\hack\medical-management\src\images\hospital-3yL2QM6-600.jpg" alt="Hospital Logo" className="logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn btn-logout" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
