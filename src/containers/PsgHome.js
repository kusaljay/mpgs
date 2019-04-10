import React, { Component } from 'react';
import firebase from '../utils/firebase';
import PsgHeader from '../templates/PsgHeader';
import PsgFooter from '../templates/PsgFooter';
import PsgForm from '../components/PsgForm';
import PsgPreview from '../components/PsgPreview';
import {rounding, calcIncomeTax, currentDate} from '../utils/helpers'


class PsgHome extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      annualIncome: null,
      superPercent: null,
      grossIncome: null,
      incomeTax: null,
      netIncome: null,
      superAnnuation: null,
      pay: null,
      showPreview: false,
      payDate: '',
      payFrequency: '',
      formErrors: '',
      dbSubmitSuccess: false,
      dbSubmitSuccessMsg: '',
      dbSubmitError: false,
      dbSubmitErrorMsg: '',
      buttonTxt: '',
      employees: []
    }
    this.initialState = {...this.state};
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
      errors = 'All fields are mandatory.';
      this.setState({formErrors: errors});
      return false;
    }
    if ( annualIncome < 0 || isNaN(annualIncome) || superPercent < 0 || isNaN(superPercent) ) {
      errors = 'Annual Salary and Superannuation should be positive numbers.';
      this.setState({formErrors: errors});
      return false;
    }
    if ( superPercent > 50 ) {
      errors = 'Superannuation Rate should be between 0% - 50%.';
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
      this.setState({showPreview: true, buttonTxt: 'Pay'});
      this.generatePaySlip();
    }
  }

  handlePay = (e) => {
    e.preventDefault();
    const employeesRef = firebase.database().ref('/employees');
    const currentEmployee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            payDate: this.state.payDate,
            payFrequency: this.state.payFrequency,
            annualIncome:this.state.annualIncome,
            superPercent: this.state.superPercent,
            grossIncome: this.state.grossIncome,
            incomeTax: this.state.incomeTax,
            netIncome: this.state.netIncome,
            superAnnuation: this.state.superAnnuation,
            pay: this.state.pay
    };
    employeesRef.push(currentEmployee)
    .then(() => {
      const success = `Pay info succefully added for ${this.state.firstName} ${this.state.lastName}`;
      this.setState({dbSubmitSuccess: true, dbSubmitSuccessMsg: success, buttonTxt: `Add another employee`});
    })
    .catch((error) => {
      this.setState({dbSubmitError: true, dbSubmitErrorMsg: error.message});
    });
  }

  handleAddAnother = (e) => {
    e.preventDefault();
    this.setState(this.initialState);
  }

  componentDidMount() {
    /* Use this to view the database getting updated using console.log
       Didn't attempt to render the list employees being added to the database. 
    */
    const employeesRef = firebase.database().ref('/employees');
    employeesRef.on('value', (snapshot) => {
      let empFromDb = snapshot.val();
      console.log(empFromDb);
    });
  }

  renderContent = () => {
    if(!this.state.showPreview) {
      return <PsgForm inputChanged={this.handleInputChange} submitGenerate={this.handleSubmit} errors={this.state.formErrors} />
    } else {
      return <PsgPreview employeeData={this.state} clickPay={this.handlePay} clickAnother={this.handleAddAnother} />
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
