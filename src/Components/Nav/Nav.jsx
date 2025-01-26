import React from "react";
import Styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${Styles.myNav}`}>
        <div className="container">
          <NavLink
            className={`navbar-brand ${Styles.myNav} ${Styles.title}`}
            to="/"
          >
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto p-3">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${Styles.myNav} ${isActive ? Styles.active : ""}`
                  }
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${Styles.myNav} ${isActive ? Styles.active : ""}`
                  }
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${Styles.myNav} ${isActive ? Styles.active : ""}`
                  }
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
