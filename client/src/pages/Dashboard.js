import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { ThemeContext } from '../App';

// UI Icons
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import {MdLightMode} from 'react-icons/md';

// Components
import Header from '../components/navigation/Header';
import InvoicePopup from './invoice/InvoicePopup';
import Paid from '../components/status/Paid';
import Pending from '../components/status/Pending';
import Draft from '../components/status/Draft';


const Dashboard = () => {
  
  const [invoiceList, setInvoiceList] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false);
  const { darkMode } = useContext(ThemeContext)

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

  // Filter Invoices
  const [filtered, setFiltered] = useState([]);
  const handleFilter = (e) => {
    const name = e.target.name
    const result = invoiceList.filter(invoice => invoice.status == name)
    setFiltered(result)
  }
  console.log(filtered)
 // isChecked = true -> load filtered
 // isChecked = false -> load invoices 

  return (
    <>
    { darkMode ? 
    <div>
    <Header />
    <ContainerDark >
      <Head>
        <div>
          <TitleDark > Invoices </TitleDark>
          <TextDark  > There are 8 total invoices </TextDark>
        </div>
        <Actions>
        <FilterDark>
          <div className="dropdown show" >
            <a className="btn dropdown-toggle" href="#" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by status
            </a>
            <div className="dropdown-menu" >
              <div> <input type="checkbox" name="Draft" onChange={handleFilter} /> <label> Draft </label> </div>
              <div> <input type="checkbox" name="Pending" onChange={handleFilter} /> <label> Pending </label> </div>
              <div> <input type="checkbox" name="Paid" onChange={handleFilter} /> <label> Paid </label> </div> 
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
      <InvoiceDark key={invoice._id}> 
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
            : <Draft mode={darkMode} />
          }
          <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </ContentDark>
        </Link>
      </InvoiceDark>
        ))}
      </Invoices>
      </ContainerDark>


    <InvoicePopup 
    trigger={buttonPopup} 
    setTrigger={setButtonPopup} 
    
    /> 
    </div>
    :
    <div>
    
    <Header/>
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
            <div class="dropdown-menu">
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
      <InvoiceLight key={invoice._id}> 
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
              :  <Draft mode={darkMode} />
            } 
          <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </div>
        </ContentLight>
        </Link>
      </InvoiceLight>
      ))}
      </Invoices>
      </ContainerLight>
      <InvoicePopup 
      trigger={buttonPopup} 
      setTrigger={setButtonPopup} 
      /> 
      </div>
          }
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
const ContainerDark = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  min-height: 45rem;
  color: white; 
  background-color: #141625; 
  margin-left: auto;
  margin-right: auto;
`

const ContainerLight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    min-height: 45rem;
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