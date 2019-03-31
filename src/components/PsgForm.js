import React from 'react';
import { withRouter } from 'react-router';

const PsgForm = (props) => {
  return (
    <div className="card content-container">
      <form onSubmit={props.submitGenerate}>
        <h2 className="psg-heading-card">Employee info</h2>
        <div className="d-flex flex-wrap mr-n4">
          <div className="form-group empinfo-field">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName" onChange={props.inputChanged} value={props.firstName}  />
          </div>
          <div className="form-group empinfo-field">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName" onChange={props.inputChanged} value={props.lastName} />
          </div>
          <div className="form-group empinfo-field">
            <label>Sal</label>
            <input type="text" className="form-control" name="annualIncome" onChange={props.inputChanged} value={props.annualIncome} />
          </div>
          <div className="form-group empinfo-field">
            <label>Sup</label>
            <input type="text" className="form-control" name="superPercent" onChange={props.inputChanged} value={props.superPercent} />
          </div>
          <button type="submit" className="btn btn-success btn-post-login">Generate Payslip</button>
        </div>

      </form>
    </div>
  )
}

export default withRouter(PsgForm);
