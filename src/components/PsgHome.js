import React, { Component } from 'react';
import PsgHeader from './templates/PsgHeader';
import PsgFooter from './templates/PsgFooter';
import PsgForm from './PsgForm';
import PsgPreview from './PsgPreview';


import {rounding, calcIncomeTax, currentDate} from './utils/helpers'


class PsgHome extends Component {
  state = {
    firstName: '',
    lastName: '',
    payDate: '',
    payFrequency: '',
    annualIncome: null,
    superPercent: null,
    grossIncome: null,
    incomeTax: null,
    netIncome: null,
    superAnnuation: null,
    pay: null,
    showPreview: false
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }
  
  handleValidation = () => {
    const {firstName, lastName, annualIncome, superPercent} = this.state;
    let errors = '';

    if ( firstName === '' || lastName === '' || annualIncome === null || superPercent === null ) {
      errors = '* Fields cannot be empty.';
      this.setState({formErrors: errors});
      return false;
    }
    if ( annualIncome < 0 || isNaN(annualIncome) || superPercent < 0 || isNaN(superPercent) ) {
      errors = '* Annual Salary and Superannuation should be positive numbers.';
      this.setState({formErrors: errors});
      return false;
    }
    if ( superPercent > 50 ) {
      errors = '* Superannuation Rate should be between 0% - 50%.';
      this.setState({formErrors: errors});
      return false;
    }
    return true;
  }

  generatePaySlip = () => {
    const annualIncome = this.state.annualIncome,
          grossIncome = rounding(annualIncome / 12),
          incomeTax = calcIncomeTax(annualIncome),
          netIncome = grossIncome - incomeTax,
          superAnnuation = rounding((grossIncome * this.state.superPercent) / 100),
          pay = rounding(netIncome - superAnnuation),
          payDate = currentDate(),
          payFrequency = 'Monthly';

    this.setState({
          annualIncome: annualIncome,
          grossIncome: grossIncome, 
          incomeTax: incomeTax, 
          netIncome: netIncome, 
          superAnnuation: superAnnuation, 
          pay: pay,
          payDate: payDate,
          payFrequency: payFrequency
        });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      this.setState({showPreview: true});
      this.generatePaySlip();
    }
  }

  renderContent = () => {
    if(!this.state.showPreview) {
      return <PsgForm inputChanged={this.handleInputChange} submitGenerate={this.handleSubmit} errors={this.state.formErrors} />
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
        </main>
        <PsgFooter />
      </div>
    );
  }
}



export default PsgHome;
