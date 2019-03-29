import React, { Component } from 'react';
import PsgHeader from './templates/PsgHeader';
import PsgFooter from './templates/PsgFooter';
import PsgForm from './PsgForm';
import PsgPreview from './PsgPreview';


class PsgHome extends Component {
  state = {
    firstName: '',
    lastName: '',
    annualSalary: null,
    superPercent: null,
    showPreview: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState !== nextProps) {
      firstName: nextProps.firstName;

    }
  }
 */
  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({showPreview: true});
  }

  renderContent = () => {
    if(this.state.showPreview === false) {
      return <PsgForm fieldChanged={this.handleChange} submitGenerate={this.handleSubmit} />
    } else {
      return <PsgPreview employeeData={this.state} />
    }
  }
  
  render() {

    return (
      <div className="post-login-main-wrapper">
        <PsgHeader />
        <main className="container">
            {this.renderContent()}
            {/* <PsgPreview empData={this.state} /> */}
            {/* 
            <Route path="/" 
                   render={(routeProps) => (<PsgForm {...routeProps} fieldChanged={this.handleChange} submitGenerate={this.handleSubmit} />)} />
            <Route path="/psghome/preview" 
                   render={(routeProps) => (<PsgPreview {...routeProps} employeeData={this.state} />)} />
            */}
        </main>
        <PsgFooter />
      </div>
      
    );
  }
}



export default PsgHome;
