import React from 'react';
import {IoIosContact} from 'react-icons/io';

const PsgPreview = ({employeeData, clickPay, clickAnother}) => {
  return (
    <div>
      <div className="preview-wrapper card content-container">
        <h2 className="psg-heading-card"><IoIosContact className="icon"/>Pay slip for {employeeData.firstName} {employeeData.lastName}</h2>
        {employeeData.dbSubmitSuccessMsg && <div className="alert alert-success form-alerts">{employeeData.dbSubmitSuccessMsg}</div>}
        {employeeData.dbSubmitErrorMsg && <div className="alert alert-danger form-alerts">{employeeData.dbSubmitErrorMsg}</div>}
        <div className="d-flex flex-wrap">
          <table className="table table-psg">
            <thead>
              <tr>
                <th scope="col" className="w-30">Item</th>
                <th scope="col" className="w-70">Emp Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-30">Employee</td>
                <td className="w-70 =">{employeeData.firstName}&nbsp;{employeeData.lastName}</td>
              </tr>
              <tr>
                <td className="w-30">Pay Date</td>
                <td className="w-70">{employeeData.payDate}</td>
              </tr>
              <tr>
                <td className="w-30">Pay Frequency</td>
                <td className="w-70">{employeeData.payFrequency}</td>
              </tr>
              <tr>
                <td className="w-30">Annual Income</td>
                <td className="w-70 dollar">{employeeData.annualIncome}</td>
              </tr>
              <tr>
                <td className="w-30">Gross Income</td>
                <td className="w-70 dollar">{employeeData.grossIncome}</td>
              </tr>
              <tr>
                <td className="w-30">Income Tax</td>
                <td className="w-70 dollar">{employeeData.incomeTax}</td>
              </tr>
              <tr>
                <td className="w-30">Net Income</td>
                <td className="w-70 dollar">{employeeData.netIncome}</td>
              </tr>
              <tr>
                <td className="w-30">Super</td>
                <td className="w-70 dollar">{employeeData.superAnnuation}</td>
              </tr>
              <tr>
                <td className="w-30">Pay</td>
                <td className="w-70 dollar">{employeeData.pay}</td>
              </tr>
            </tbody>
          </table>
          {employeeData.dbSubmitSuccess && <button type="button" onClick={clickAnother} className="btn btn-success btn-post-login add-another">Add another employee</button>}
          {employeeData.showPreview && <button type="button" onClick={clickPay} className="btn btn-success btn-post-login pay">Pay</button>}
        </div>
      </div>
    </div>
  )
}

export default PsgPreview;