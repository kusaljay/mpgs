import React from 'react';
import { Link } from 'react-router-dom';
import fbase from '../fbase';
import logo from '../assets/logo-gradient.svg';

const PsgHeader = () => {
  return (
    <header className="header-wrapper">
      <div className="container d-flex justify-content-between align-items-center inner-wrapper">
        <img src={logo} className="logo inner" alt="myob logo" />
        <Link className="psg-link-text" onClick={() => fbase.auth().signOut()}>Logout</Link>
      </div>
    </header>
  )
}

export default PsgHeader;
