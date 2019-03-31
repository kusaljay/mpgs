import React, { Component } from 'react';
import PsgHeader from './templates/PsgHeader';
import PsgFooter from './templates/PsgFooter';
import PsgForm from './PsgForm';
import PsgPreview from './PsgPreview';


class PsgHome extends Component {
  state = {
    firstName: '',
    lastName: '',
    annualIncome: null,
    superPercent: null,
    grossIncome: null,
    incomeTax: null,
    netIncome: null,
    pay: null,
    showPreview: false
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }

  componentDidMount() {
    // this.setState({})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({showPreview: true});

  }

  calcGrossIncome = () => {
    const grossIncome = this.state.grossIncome;
    return this.state.annualIncome / 12;

  }

  calcPay () {
    

  }

  renderContent = () => {
    if(!this.state.showPreview) {
      return <PsgForm inputChanged={this.handleInputChange} submitGenerate={this.handleSubmit} />
    } else {
      return <PsgPreview employeeData={this.state} />
    }
  }
  
  render() {

    return (
      <div className="post-login-main-wrapper post-login">
        <PsgHeader />
        <main className="container">
          <h1 className="psg-heading-main mt-5 mb-2">Pay Slip Generator</h1>
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
