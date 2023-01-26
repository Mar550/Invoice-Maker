import React from 'react';
import styled from 'styled-components';

const Field = ({mode}) => {
  return (
    <>
        { mode ? 
            <InputDark/>
        :
            <InputLight/>
        }
    </>
  )
}

const InputDark = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945; 
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white; 
`

const InputLight = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid grey; 
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: black;
`

export default Field;