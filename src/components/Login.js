import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fbase from './fbase';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
      await fbase.auth().signInWithEmailAndPassword(username.value, password.value);
      this.props.history.push('/empinfo');
    } 
    catch (error) {
      console.log(error.code);
      console.log(error.message);
      let errorCode = error.code,
          errorMessage = error.message;
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSignIn}>

        <label>Username</label>
        <input type="text" className="form-control" id="username" onChange={this.handleChange} value={this.state.username} />
        <label>Password</label>
        <input type="password" className="form-control" id="password" onChange={this.handleChange} value={this.state.password} />
        <br/>
        <button type="submit" className="btn btn-success btn-login">Sign in</button>
      </form>
    )
  }

}

export default withRouter(Login);
