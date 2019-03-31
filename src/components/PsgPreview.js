import React from 'react';
import { withRouter } from 'react-router';

const PsgPreview = ({employeeData}) => {
  return (
    <div>
      <div className="preview-wrapper card content-container">
        <h2 className="psg-heading-card">Pay slip for {employeeData.firstName}&nbsp;{employeeData.lastName}</h2>
        <div className="d-flex flex-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Emp Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employee</td>
                <td>{employeeData.firstName}&nbsp;{employeeData.lastName}</td>
              </tr>
              <tr>
                <td>Pay Date</td>
                <td></td>
              </tr>
              <tr>
                <td>Pay Frequency</td>
                <td></td>
              </tr>
              <tr>
                <td>Annual Income</td>
                <td>{employeeData.annualIncome}</td>
              </tr>
              <tr>
                <td>Gross Income</td>
                <td></td>
              </tr>
              <tr>
                <td>Income Tax</td>
                <td></td>
              </tr>
              <tr>
                <td>Net Income</td>
                <td></td>
              </tr>
              <tr>
                <td>Super</td>
                <td></td>
              </tr>
              <tr>
                <td>Pay</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="btn btn-success btn-post-login">Pay</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(PsgPreview);