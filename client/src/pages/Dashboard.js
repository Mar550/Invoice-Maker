import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import {Link} from 'react-router-dom';

// UI Icons
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import {MdLightMode} from 'react-icons/md';

// Components
import InvoicePopup from './invoice/InvoicePopup';
import Paid from '../components/status/Paid';
import Pending from '../components/status/Pending';
import Draft from '../components/status/Draft';

const Dashboard = (props) => {
  
  const [invoiceList, setInvoiceList] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false);
  const [lightMode, setLightMode] = useState(true);

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
    return sum.toLocaleString('en-US',{'minimumFractionDigits':2,'maximumFractionDigits':2});
  }

  useEffect(() => {
    getInvoices()
  },[])
  console.log(invoiceList)


  return (
    <>
    { lightMode ? 
    <Container>
    <Header>
      <Home>
        <AiFillHome/>
      </Home>
      <ModeDark onClick={() => setLightMode(!lightMode)} >      
           <MdLightMode />
      </ModeDark>
    </Header>
    
    <ContainerDark >
      <Head>
        <div>
          <TitleDark > Invoices </TitleDark>
          <TextDark  > There are 8 total invoices </TextDark>
        </div>
        <Actions>
        <FilterDark>
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
        </FilterDark>
          <Button onClick={() => setButtonPopup(true)}> <BsFillPlusCircleFill style={{fontSize:"2.1rem"}}/>
            New Invoice
          </Button>
        </Actions>
      </Head>
      <Invoices>
      {invoiceList.map(invoice => (
      <InvoiceDark> 
        <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
        <ContentDark>
          <Id> <Span>#</Span>{invoice._id.slice(0,6).toUpperCase()}</Id>
          <TextDark> Due {Date(invoice.term).toString().slice(4,15)} </TextDark>
          <TextDark> {invoice.client_name} </TextDark>
            <Number> € {dueAmount(invoice.items)} </Number>
          <div style={{ display:"flex", flexDirection:"row", gap:"1.5rem"}}>
          {
            invoice.status == "Paid" ? <Paid/>
            : invoice.status == "Pending" ? <Pending/>
            :  <Draft mode={lightMode} />
          }
          <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </ContentDark>
        </Link>
      </InvoiceDark>
        ))}
      </Invoices>
      </ContainerDark>

    </Container>
    :
    <Container>
    <Header>
      <Home>
        <AiFillHome/>
      </Home>
      <ModeLight>      
        <div style={{display:"inline-flex", gap:"1rem"}}>
          <label> <MdLightMode onClick={() => setLightMode(!lightMode)}/> </label>
        </div>
      </ModeLight>
    </Header>
    
    <ContainerLight >
      <Head>
        <div>
          <TitleLight > Invoices </TitleLight>
          <TextLight  > There are 8 total invoices </TextLight>
        </div>
        <Actions>
        <FilterLight>
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
        </FilterLight>
          <Button onClick={() => setButtonPopup(true)}> <BsFillPlusCircleFill style={{fontSize:"2.1rem"}}/>
            New Invoice
          </Button>
        </Actions>
      </Head>
      <Invoices>

      {invoiceList.map(invoice => (
      <InvoiceLight> 
        <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
        <ContentLight>
          <Id> <Span>#</Span>{invoice._id.slice(0,6).toUpperCase()}</Id>
          <TextLight> Due {Date(invoice.term).toString().slice(4,15)} </TextLight>
          <TextLight> {invoice.client_name} </TextLight>     
            <Number> € {dueAmount(invoice.items)} </Number>
          <div style={{ display:"inline-flex", gap:"1.4rem"}}>
            {
              invoice.status == "Paid" ? <Paid/>
              : invoice.status == "Pending" ? <Pending/>
              :  <Draft mode={lightMode} />
            } 
          <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </ContentLight>
        </Link>
      </InvoiceLight>
      ))}
      </Invoices>
      </ContainerLight>

    </Container>
    } 
      <InvoicePopup 
      trigger={buttonPopup} 
      setTrigger={setButtonPopup} 
      /> 
    </>
  )
}

// STYLES

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
const ModeDark = styled.div`
  color: white;
  border:none;
  float:right;
  font-size: 28px;
  margin-right: 8%;
  margin-top: 0.9rem;
  color: #62688d;
  &:hover{
    cursor: pointer;
    font-size: 32px;
    margin-top: 0.7rem;
  }
`
const ModeLight = styled.div`
  color: white;
  border:none;
  float:right;
  font-size: 28px;
  margin-right: 8%;
  margin-top: 0.9rem;
  color: white;
  &:hover{
    cursor: pointer;
    font-size: 32px;
    margin-top: 0.7rem;
  }
`

const ContainerDark = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  color: white; 
  background-color: #141625; 
  margin-left: auto;
  margin-right: auto;
  
`
const ContainerLight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    color: black; 
    background-color: #f8f8fb; 
    margin-left: auto;
    margin-right: auto;
`
// Header
const Head = styled.div`
  margin-top: 1rem;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`

// General
const TitleDark = styled.h1`
  font-weight: 600;
  color: white;
`
const TitleLight = styled.h1`
  font-weight: 600;
  color: black;
`
const Number = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`
const TextDark = styled.p`
  font-size: 13px;
  color: white;
`
const TextLight = styled.p`
  font-size: 13px;
  color: grey;

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
const InvoiceDark = styled.div`
  padding: 1rem;
  background-color: #1E2139;
  width: 65%;
  height: 70%;
  border: 1px solid white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: 1px solid #1E2139;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  &:hover{
    border: 1px solid #6b52d6;
    cursor: pointer;
  }
`
const InvoiceLight = styled.div`
  padding: 1rem;
  background-color: white;
  width: 65%;
  height: 70%;
  border: none;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
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
const ContentDark = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.7rem;
  color:white;
`
const ContentLight = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.7rem;
  color:black;
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
const PendingD = styled.div`
  font-size: 1.2rem;
    line-height: .9375rem;
    letter-spacing: -.25px;
    display: flex;
    align-items: center;
    height: 2.5rem;
    min-width: 6.7rem;
    justify-content: center;
    font-weight: 700;
    border-radius: 6px;
    background: rgba(255,143,0,.0571);
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

const FilterDark = styled.div`
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

const FilterLight = styled.div`
  color: black !important;
  .btn {
    color: black !important;
    margin-top: 0.5rem;
  }
  .dropdown-menu{
    gap: 3px;
    padding: 1rem;
    width: 120%;
    color:black;
  }
  input{
    border: none;
    margin-top: 5px;
  }
  label{
    margin-left: 5px;
  }
`

export default Dashboard;