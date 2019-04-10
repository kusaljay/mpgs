import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../utils/firebase';
/* import logo from '../assets/logo-gradient.svg'; */

const PsgHeader = () => {
  return (
    <header className="header-wrapper">
      <div className="container d-flex justify-content-end align-items-center inner-wrapper">
        {/* <img src={logo} className="logo inner" alt="myob logo" /> */}
        <Link className="psg-link-text" to="./login" onClick={() => firebase.auth().signOut()}>Logout</Link>
      </div>
    </header>
  )
}

export default PsgHeader;
