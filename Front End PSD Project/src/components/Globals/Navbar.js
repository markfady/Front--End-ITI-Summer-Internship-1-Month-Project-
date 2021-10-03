import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {

  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">MoGO</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">about us</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/services">services</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/we-do">we do</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/ourTeam">Our Team</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/ourWork">Our Work</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/reviews">reviews</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">blogs</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>

  )
}

export default Navbar;


