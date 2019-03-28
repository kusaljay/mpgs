import React from 'react';
import { Link } from 'react-router-dom';
import fbase from './fbase';

function PsgEmployee() {
  return (
    <div>
      <p>PsgEmployee info form</p>
      <Link onClick={() => fbase.auth().signOut()}>Logout</Link>
    </div>
  )
}

export default PsgEmployee;
