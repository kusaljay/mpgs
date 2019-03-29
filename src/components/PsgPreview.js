import React from 'react';
import { withRouter } from 'react-router';

const PsgPreview = (props) => {
  return (
    <div>
      <h4>Generaor</h4>
        <div className="preview-wrapper">
          <h5>PS for</h5>
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
                <td>{props.firstName}{props.lastName}</td>
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
                <td></td>
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
          <button type="button">Pay</button>
        </div>


    </div>
  )
}

export default withRouter(PsgPreview);