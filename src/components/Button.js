import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
`;

const buttonMpsg = ({onClick, children}) => {
  return (
    <Button onClick={onClick} className="btn btn-success btn-post-login">{children}</Button>
  )
}

export default buttonMpsg;
