import React from "react";
import './Navbar.css';  
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-teal">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            User Management System
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to='/addUser'>Add User</Link>
         </div>
      </nav>
    </div>
  );
}

export default Navbar;
