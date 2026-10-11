
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Hub</h2>

      <div className="nav-links">
        <Link to="/">Student List</Link>
        <Link to="/favorites">Favourite Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;
