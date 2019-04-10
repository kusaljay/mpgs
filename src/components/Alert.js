import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  color: white;
  font-weight: bold;
  background-color: purple;
`;

const alertMpsg = ({type, children}) => {
  let alertType = type;
  
  return (
    <Alert className="alert form-alerts">{children}</Alert>
  )
}

export default alertMpsg;