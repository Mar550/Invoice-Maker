import React from 'react'
import styled from 'styled-components'
import {tablet} from '../../responsive'

const Pending = (props) => {
  return (
    <>
        <Status> 
            <Li> Pending </Li> 
        </Status>
    </>
  )
}
export default Pending;

const Status = styled.div`
  font-size: 1.2rem;
    line-height: .9375rem;
    letter-spacing: -.25px;
    display: flex;
    align-items: center;
    height: 2.5rem;
    min-width: 8.1rem;
    justify-content: center;
    font-weight: 700;
    border-radius: 6px;
    background: rgba(255,143,0,.06);
    margin-top: -0.6rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
    box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
    cursor: pointer;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    border: 1px solid transparent;
    color: #33d69f;
`

const Li = styled.li`
  color: #ff8f00;
  font-size: 1rem;
`