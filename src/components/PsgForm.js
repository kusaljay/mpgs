import React from 'react';

const PsgForm = (props) => {
  return (
    <div className="card content-container">
      <form onSubmit={props.submitGenerate}>
        <h2 className="psg-heading-card">Employee info</h2>
        <div className="form-errors">{props.errors}</div>
        <div className="d-flex flex-wrap mt-3 mr-n4">
          <div className="form-group empinfo-field">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName" onChange={props.inputChanged} value={props.firstName}  />
          </div>
          <div className="form-group empinfo-field">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName" onChange={props.inputChanged} value={props.lastName} />
          </div>
          <div className="form-group empinfo-field">
            <label>Annual Salary</label>
            <input type="text" className="form-control" name="annualIncome" onChange={props.inputChanged} value={props.annualIncome} />
          </div>
          <div className="form-group empinfo-field">
            <label>Superannuation Rate</label>
            <input type="text" className="form-control" name="superPercent" onChange={props.inputChanged} value={props.superPercent} />
          </div>
          <button type="submit" className="btn btn-success btn-post-login">Generate Payslip</button>
        </div>

      </form>
    </div>
  )
}

export default PsgForm;
