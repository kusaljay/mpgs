import React from 'react';
import {IoIosContact} from 'react-icons/io';

const PsgForm = ({inputChanged, submitGenerate, errors}) => {
  return (
    <div className="card content-container">
      <form onSubmit={submitGenerate}>
        <h2 className="psg-heading-card"><IoIosContact className="icon"/>Employee info</h2>
        {errors && <div className="alert alert-danger form-alerts">{errors}</div>}
        <div className="d-flex flex-wrap mr-n4">
          <div className="form-group empinfo-field">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName" onChange={inputChanged} />
          </div>
          <div className="form-group empinfo-field">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName" onChange={inputChanged} />
          </div>
          <div className="form-group empinfo-field">
            <label>Annual Salary</label>
            <input type="text" className="form-control dollar" name="annualIncome" onChange={inputChanged} />
          </div>
          <div className="form-group empinfo-field">
            <label>Superannuation Rate</label>
            <input type="text" className="form-control" name="superPercent" onChange={inputChanged} />
          </div>
          <button type="submit" className="btn btn-success btn-post-login">Generate Payslip</button>
        </div>

      </form>
    </div>
  )
}

export default PsgForm;
