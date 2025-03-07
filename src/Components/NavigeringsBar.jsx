import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigeringsBar = () => {
  return (
    <header className="top-nav">
      <div className="nav-wrapper">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Hem
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cv" className={({ isActive }) => (isActive ? "active" : "")}>
                Tidslinje
              </NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
                Om mig
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigeringsBar;
