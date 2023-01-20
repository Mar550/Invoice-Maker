import React from 'react'
import styled from 'styled-components'

const Draft = ({mode}) => {
  
  console.log(mode)
  return (
    <>
    { mode ?
      <Status>
        <Li> Draft</Li>
      </Status>
      :
      <Status2>
        <Li2> Draft</Li2>
      </Status2>
    }
    </>
  )
}

export default Draft;

const Status = styled.div`  
  background: rgba(223,227,250,.06);
  color: #fff;
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
  margin-top: -0.6rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  cursor: pointer;
  -webkit-transition: .3s ease;
  transition: .3s ease;
  border: 1px solid transparent;
`

const Li = styled.li`
  color: #fff;
  font-size: 1rem;
`

const Status2 = styled.div`  
  background: rgba(55,59,83,.0571);
  color: #373b53;
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
  margin-top: -0.6rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  cursor: pointer;
  -webkit-transition: .3s ease;
  transition: .3s ease;
  border: 1px solid transparent;
`

const Li2 = styled.li`
  color: #373b53;
  font-size: 1rem;
`