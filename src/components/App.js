import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from './firebase';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import PsgHome from './PsgHome';
import './assets/App.scss';

class App extends Component {
  state = {
    signedIn: false,
    user: null,
    data: []
  }

  componentDidMount() { 
    firebase.auth().onAuthStateChanged( user => {
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
          <PrivateRoute path="/psghome" component={PsgHome} signedIn={signedIn} />
        </div>
      </Router>

    );
  }
}

export default App;
