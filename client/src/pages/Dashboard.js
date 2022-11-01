import React from 'react'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import {AiOutlineDown} from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs';


// Container
const Container = styled.div`
  display:flex;
  flex-direction: column; 
  background-color: #141625;
  width: 100%;
  height: 70rem;

`
const Header = styled.div`
  background-color: #252945; 
  width: 100%;
  height: 3rem;
  color: white;
`
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  color: white;
  background-color: #141625;
  margin-left: auto;
  margin-right: auto;
`

// Header
  const Head = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`

// General
const Title = styled.h1`
`
const Number = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`
const Text = styled.p`
color: white;
font-size: 16px;
`
const Button = styled.button`
    border: none;
    border-radius: 5px;
    display: inline-flex;
    justify-content: space-between;
    padding: 5px;
    gap: 1rem;
    background-color: #7c5dfa;
    border: none;
    color: #fff;
    height: 3.2rem;
    width: 10rem;
    font-weight: 500;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.875rem;
    position: relative;
    font-size: 1rem;
    letter-spacing: -.25px;
    color: white;
`
const Span = styled.span`
  color:#6b52d6;
`
const Span2 = styled.span`
color: white;
`
const Li = styled.li`
  color: #33d69f;
  font-size: 1rem;
`
// INVOICE
const Invoice = styled.div`
  padding: 1rem;
  background-color: #1E2139;
  width: 70%;
  border: 1px solid white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: 1px solid #1E2139;
  &:hover{
    border: 1px solid #6b52d6;
    cursor: pointer;
  }
`
const Id = styled.p`
  font-weight: bold;
`
const Amount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Heading = styled.div`
  padding: 10px;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.7rem;
`
const Action = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.7rem;
`
const Status = styled.div`
  font-size: 1.2rem;
    line-height: .9375rem;
    letter-spacing: -.25px;
    display: flex;
    align-items: center;
    height: 2.5rem;
    min-width: 6.5rem;
    justify-content: center;
    font-weight: 700;
    border-radius: 6px;
    background: #1F2C3F;
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
// header #252945
// container #141625
// invoice #1E2139
// button #9277ff
// diese #758573
// green #33d69f
// orange #ff8f00

const Filter = styled.div`
  background-color: #141625 !important;
  color: white !important;
  .btn {
    color: white !important;
    margin-top: 0.5rem;
  }
  .dropdown-menu{
    gap: 3px;
    padding: 1rem;
    width: 120%;
    background-color: #141625;
    color:white;
  }
  input{
    border: none;
    margin-top: 5px;
  }
  label{
    margin-left: 5px;
  }
`

const Dashboard = () => {
  return (
    <>
    <Container>
    <Header>
      Header
    </Header>
    <Container2>
      <Head>
        <div>
          <Title> Invoices </Title>
          <Text> 8 Invoices </Text>
        </div>
        <Actions>
        <Filter>
          <div class="dropdown show" >
            <a class="btn dropdown-toggle" href="#" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by status
            </a>
            <div class="dropdown-menu" >
              <div> <input type="checkbox"/> <label> Action 1 </label> </div>
              <div> <input type="checkbox"/> <label> Action 2 </label> </div>
              <div> <input type="checkbox"/> <label> Acion 3 </label> </div> 
              <div> <input type="checkbox"/> <label> Action 4 </label>  </div>
            </div>
          </div>
        </Filter>
          <Button> <BsFillPlusCircleFill style={{fontSize:"2.1rem"}}/>
            New Invoice
          </Button>
        </Actions>
      </Head>
      <Invoice> 
        <Content>
          <Id> <Span>#</Span> RT3080 </Id>
          <Text> Due 19 Aug 2021 </Text>
          <Text> Jensen Huang </Text>
          <Number> $1,800.90 </Number>
          <div style={{ display:"inline-flex", gap:"1.4rem"}}>
          <Status> <Li>Paid</Li> </Status>
          <BsChevronRight style={{color:"#33d69f", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </Content>
      </Invoice>
    </Container2>
      
    </Container>
    </>
  )
}

export default Dashboard