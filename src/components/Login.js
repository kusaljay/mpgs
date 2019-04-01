import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fbase from './fbase';
import logo from './assets/logo-gradient.svg';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    //let errors = '';
    try {
      const user = await fbase.auth().signInWithEmailAndPassword(username.value, password.value);
      this.props.history.push('/psghome');
    } 
    catch (error) {
      //console.log(error.code);
      //console.log(error.message);
      this.setState({formErrors: error.message});
    }
  }
  
  render() {
    return (
      <div className="container login-wrapper d-flex justify-content-center align-items-center">
        <img src={logo} className="logo login" alt="myob logo" />
        <h1 className="psg-heading-main mb-4">Sign in to PSG</h1>
        <div className="card content-container login">
          <form onSubmit={this.handleSignIn}>
            <div className="form-errors">{this.state.formErrors}</div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" id="username" onChange={this.handleChange} value={this.state.username} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password" onChange={this.handleChange} value={this.state.password} />
            </div>
            <button type="submit" className="btn btn-success btn-login">Sign in</button>
          </form>
        </div>
      </div>
    )
  }

}

export default withRouter(Login);
