import React from 'react';
import logo from '../assets/logo-gradient.svg';

const PsgFooter = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-nav container d-flex justify-content-between align-items-center">
        <img src={logo} className="logo inner" alt="myob logo" />
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link psg-link-text" href="/">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link psg-link-text" href="/">Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link psg-link-text" href="/">Link 3</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="container d-flex justify-content-between align-items-center">
          <span>Excepteur sint occaecat</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
      </div>
    </footer>
  )
}

export default PsgFooter;