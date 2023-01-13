import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Switch from "react-switch";
import InvoicePopup from './InvoicePopup';
import {Link} from 'react-router-dom';

//Icons
import {AiOutlineDown} from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import {MdOutlineNightlightRound} from 'react-icons/md';

// Container
const Container = styled.div`
  display:flex;
  flex-direction: column; 
  background-color: #141625;
  width: 100%;
  height: 45rem;

`
const Header = styled.div`
  background-color: #252945; 
  width: 100%;
  height: 4.5rem;
  color: white;
`
const Home = styled.div`
  background-color: #7c5dfa;
  padding-left: 1rem;
  padding-top: 0.5rem;
  font-size: 35px;
  width: 4.3rem;
  height: 4.5rem;
  float: left;
  border-radius: 5px;
  cursor: pointer;
`
const Mode = styled.div`
  color: white;
  border:none;
  float:right;
  font-size: 28px;
  cursor:pointer;
  margin-right: 5%;
  margin-top: 1rem;
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
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`

// General
const Title = styled.h1`
font-weight: 600;
`
const Number = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`
const Text = styled.p`
color: white;
font-size: 13px;
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
const Li2 = styled.li`
  color: #ff8f00;
  font-size: 1rem;
`
// INVOICE
const Invoice = styled.div`
  padding: 1rem;
  background-color: #1E2139;
  width: 65%;
  height: 70%;
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
  font-size: 15px;
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
const Invoices = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
const Status2 = styled.div`
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
  
  const [invoiceList, setInvoiceList] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false);

  const getInvoices = async () => {
    axios.get(`http://localhost:5000/api/invoice/all`).then(res => {
      const result = res.data
      setInvoiceList(result)
    });
  }

  // Amount Due
  function dueAmount(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i].price*array[i].quantity;
    }
    return sum
  }

  useEffect(() => {
    getInvoices()
  },[])
  console.log(invoiceList)

  return (
    <>
    <div>
    <Container>
    <Header>
      <Home>
        <AiFillHome/>
      </Home>
      <Mode>      
        <div style={{display:"inline-flex", gap:"1rem"}}>
          <div style={{marginTop:"0.5rem"}}>
          <Switch className="switch-btn" />
          </div> 
          <label> <MdOutlineNightlightRound/> </label>
        </div>
      </Mode>
    </Header>
    <Container2 >
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
              <div> <input type="checkbox"/> <label> Draft </label> </div>
              <div> <input type="checkbox"/> <label> Pending </label> </div>
              <div> <input type="checkbox"/> <label> Paid </label> </div> 
            </div>
          </div>
        </Filter>
          <Button onClick={() => setButtonPopup(true)}> <BsFillPlusCircleFill style={{fontSize:"2.1rem"}}/>
            New Invoice
          </Button>
        </Actions>
      </Head>
      <Invoices>
      {invoiceList.map(invoice => (
      <Invoice> 
        <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
        <Content>
          <Id> <Span>#</Span>{invoice._id.slice(0,8).toUpperCase()}</Id>
          <Text> Due {Date(invoice.term).toString().slice(4,15)} </Text>
          <Text> {invoice.client_name} </Text>
         
            <Number> € {dueAmount(invoice.items)} </Number>
       
          <div style={{ display:"inline-flex", gap:"1.4rem"}}>
          <Status> <Li>Paid</Li> </Status>
          <BsChevronRight style={{color:"#33d69f", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </Content>
        </Link>
      </Invoice>
        ))}

      <Invoice> 
        <Content>
          <Id> <Span>#</Span> FO5030 </Id>
          <Text> Due 25 Dec 2022 </Text>
          <Text> James L. Ivy </Text>
          <Number> €500.50 </Number>
          <div style={{ display:"inline-flex", gap:"1.4rem"}}>
          <Status> <Li>Paid</Li> </Status>
          <BsChevronRight style={{color:"#33d69f", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </Content>
      </Invoice>
      <Invoice> 
        <Content>
          <Id> <Span>#</Span> PA2000 </Id>
          <Text> Due 10 Feb 2023 </Text>
          <Text> Diana J. Cribb </Text>
          <Number> €3,200.00 </Number>
          <div style={{ display:"inline-flex", gap:"1.4rem"}}>
          <Status2> <Li2> Pending </Li2> </Status2>
          <BsChevronRight style={{color:"#33d69f", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </Content>
      </Invoice>
      </Invoices>
      </Container2>

    </Container>
    <InvoicePopup 
      trigger={buttonPopup} 
      setTrigger={setButtonPopup} 
      />
    </div>
    </>
  )
}

export default Dashboard;