import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import fbase from './fbase';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import PsgEmployee from './PsgEmployee';
import './App.css';

class App extends Component {
  state = {
    signedIn: false,
    user: null,
    data: []
  }

  componentDidMount() { 
    fbase.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ signedIn: true, currentUser: user }); 
      }
      else {
        this.setState({ signedIn: false, currentUser: null }); 
      }
    });
  }

  render() {
    const {signedIn} = this.state;

    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
          <PrivateRoute path="/empinfo" component={PsgEmployee} signedIn={signedIn} />
        </div>
      </Router>

    );
  }
}

export default App;
