import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">DR Detection</div>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/upload" className={({ isActive }) => isActive ? "active" : ""}>Upload</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        <NavLink to="/Result" className={({ isActive }) => isActive ? "active" : ""}>reports</NavLink>
        <NavLink to="/dataset" className={({ isActive }) => isActive ? "active" : ""}>Dataset</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
