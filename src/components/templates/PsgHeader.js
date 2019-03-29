import React from 'react';
import { Link } from 'react-router-dom';
import fbase from '../fbase';

const PsgHeader = () => {
  return (
    <header className="header-wrapper">
      <div className="container d-flex justify-content-between align-items-center inner-wrapper">
        <img src="" className="" alt="Logo" />
        <Link className="psg-link-text" onClick={() => fbase.auth().signOut()}>Logout</Link>
      </div>
    </header>
  )
}

export default PsgHeader;
