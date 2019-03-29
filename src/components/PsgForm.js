import React from 'react';
import { withRouter } from 'react-router';

const PsgForm = (props) => {
  /* const handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/pay-preview');
  } */ 


  return (
    <div className="psg-form">
      <h5>Generaor</h5>
      <form className="">
        <h5>Emp info</h5>
        <div className="d-flex flex-wrap">
          <div className="form-group empinfo-field">
            <label>First Name</label>
            <input type="text" className="form-control" id="firstName" onChange={props.fieldChanged} value={props.firstName}  />
          </div>
          <div className="form-group empinfo-field">
            <label>Last Name</label>
            <input type="text" className="form-control" id="lastName" onChange={props.fieldChanged} value={props.lastName} />
          </div>
          <div className="form-group empinfo-field">
            <label>Sal</label>
            <input type="text" className="form-control" id="annualSalary" onChange={props.fieldChanged} value={props.annualSalary} />
          </div>
          <div className="form-group empinfo-field">
            <label>Sup</label>
            <input type="text" className="form-control" id="superPercent" onChange={props.fieldChanged} value={props.superPercent} />
          </div>
          <button type="button" onClick={props.submitGenerate}>Generate</button>
        </div>

      </form>
    </div>
  )
}

export default withRouter(PsgForm);
