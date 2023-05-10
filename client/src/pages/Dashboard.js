import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ThemeContext } from '../App';
import { publicRequest } from '../request';
import { store } from '../store';
import {tablet} from "../responsive";
import Moment from 'moment';

// UI Icons
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs';

// Components
import Header from '../components/navigation/Header';
import InvoicePopup from './invoice/InvoicePopup';
import Paid from '../components/status/Paid';
import Pending from '../components/status/Pending';
import Draft from '../components/status/Draft';
import CheckboxList from '../components/checkbox/CheckboxInput';
import Loading from '../components/navigation/Loading';


const Dashboard = () => {
  
  const [invoiceList, setInvoiceList] = useState([])
  const [checked, setChecked] = useState([])

  const [buttonPopup, setButtonPopup] = useState(false)
  const { darkMode } = useContext(ThemeContext)
  /** const { user, setUser } = useContext(UserContext)*/

  const [loading, setLoading] = useState(false)

  /** const id = String(store.getState().auth.user._doc._id) */
  
  const getInvoices = async () => {
    await publicRequest.get(`/invoice/all`).then(res  => {
      /** const result = res.data.filter(inv => inv.userId == user )*/  
      const result = res.data;   
      setInvoiceList(result)
    });
  }
  
  // Function Total Amount
  function dueAmount(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i].price*array[i].quantity;
    }
    return sum.toLocaleString('en-US',{'minimumFractionDigits':2,'maximumFractionDigits':2});
  }   

  // Function Format Dates
  function formatDate(myDate) {
    return Moment(new Date(myDate)).format("DD MMM YYYY");
  }

  useEffect(() => {
    getInvoices()
    setLoading(true)
  },[])

  return (
    <>
    { invoiceList.length > 0 ? 
    <div>
    { darkMode ? 
    <div>
    <Header />
    <ContainerDark >
      <Head>
        <div>
          <TitleDark > Invoices </TitleDark>
          <TextDark  > There are {invoiceList.length} total invoices </TextDark>
        </div>
        <Actions>
        <FilterDark>
          <div className="dropdown show" >
            <a className="btn dropdown-toggle" href="#" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by status
            </a>
            <div className="dropdown-menu" style={{marginTop: "3px", border:"none"}} >
              <CheckboxList 
                invoiceList = {invoiceList}
                checked = {checked}
                setChecked = {setChecked}
              />
            </div>
          </div>
        </FilterDark>
          <Button onClick={() => setButtonPopup(true)}> <BsFillPlusCircleFill style={{fontSize:"2.1rem"}}/>
            New Invoice
          </Button>
        </Actions>
      </Head>

      <Invoices> 
      { checked.length > 0 ?
      
      checked.map((invoice, index) => (
      <InvoiceDark key={index}> 
        <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
        <ContentDark>
          <Id> <Span>#</Span>{invoice._id.slice(0,6).toUpperCase()}</Id>
          <DateDark> Due {formatDate(invoice.term)} </DateDark>
          <TextDark> {invoice.client_name} </TextDark>
          <Number> £ {dueAmount(invoice.items)} </Number>
          <StatusContainer>
          {
            invoice.status == "Paid" ? <Paid/>
            : invoice.status == "Pending" ? <Pending/>
            : <Draft mode={darkMode} />
          }
          <Icon> <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem" }}/> </Icon>
          </StatusContainer>
        </ContentDark>
        </Link>
      </InvoiceDark>
      ))
      :
      invoiceList.map((invoice, index) => (
        <InvoiceDark key={index}> 
          <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
          <ContentDark>
            <Id> <Span>#</Span>{invoice._id.slice(0,6).toUpperCase()}</Id>
            <DateDark> Due {formatDate(invoice.term)} </DateDark>
            <TextDark> {invoice.client_name} </TextDark>
              <Number> £ {dueAmount(invoice.items)} </Number>
            <StatusContainer >
            {
              invoice.status == "Paid" ? <Paid/>
              : invoice.status == "Pending" ? <Pending/>
              : <Draft mode={darkMode} />
            }
            <Icon> <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/> </Icon>
            </StatusContainer>
          </ContentDark>
          </Link>
        </InvoiceDark>
      )) 
      }
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
          <TextLight  > There are {invoiceList.length} total invoices </TextLight>
        </div>
        <Actions>
        <FilterLight>
          <div class="dropdown show" >
            <a class="btn dropdown-toggle" href="#" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by status
            </a>
            <div class="dropdown-menu" style={{marginTop: "3px", border:"none", backgroundColor:"#f8f8fb"}}>
              <CheckboxList 
                invoiceList = {invoiceList}
                checked = {checked}
                setChecked = {setChecked}
                />
            </div>
          </div>
        </FilterLight>
          <Button onClick={() => setButtonPopup(true)}> <BsFillPlusCircleFill style={{fontSize:"2.1rem"}}/>
            New Invoice
          </Button>
        </Actions>
      </Head>
      <Invoices>
      {
        checked.length > 0 ?

      checked.map(invoice => (
      <InvoiceLight key={invoice._id}> 
        <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
        <ContentLight>
          <Id> <Span>#</Span>{invoice._id.slice(0,6).toUpperCase()}</Id>
          <DateLight> Due {formatDate(invoice.term)} </DateLight>
          <TextLight> {invoice.client_name} </TextLight>     
            <Number> £ {dueAmount(invoice.items)} </Number>
          <StatusContainer >
            {
              invoice.status == "Paid" ? <Paid/>
              : invoice.status == "Pending" ? <Pending/>
              :  <Draft mode={darkMode} />
            } 
          <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </StatusContainer>
        </ContentLight>
        </Link>
      </InvoiceLight>
      ))  
    :
      invoiceList.map(invoice => (
      <InvoiceLight key={invoice._id}> 
        <Link to={`/invoice/${invoice._id}`} style={{ textDecoration: 'none', color:"white", height:"100%" }}>
        <ContentLight>
          <Id> <Span>#</Span>{invoice._id.slice(0,6).toUpperCase()}</Id>
          <DateLight> Due {Date(invoice.term).toString().slice(4,15)} </DateLight>
          <TextLight> {invoice.client_name} </TextLight>     
            <Number> £ {dueAmount(invoice.items)} </Number>
          <StatusContainer>
            {
              invoice.status == "Paid" ? <Paid/>
              : invoice.status == "Pending" ? <Pending/>
              :  <Draft mode={darkMode} />
            } 
          <BsChevronRight style={{color:"#6b52d6", marginTop:"0.5rem", fontSize:"1.2rem"}}/>
          </StatusContainer>
        </ContentLight>
        </Link>
      </InvoiceLight>
      ))
      }
      </Invoices>
      </ContainerLight>
      <InvoicePopup 
      trigger={buttonPopup} 
      setTrigger={setButtonPopup} 
      /> 
      </div>   
      }
    </div>
    :
    <Loading/>
    }
    </>
  )
}

// STYLES

// Container

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
  ${tablet({ width:"85%" })}

`
// General


const TitleDark = styled.h1`
  font-weight: 600;
  color: white;
  ${tablet({fontSize:"27px"})}
`
const TitleLight = styled.h1`
  font-weight: 600;
  color: black;
  ${tablet({fontSize:"27px"})}
`
const Number = styled.p`
  display:flex;
  font-weight: 600;
  font-size: 1.2rem;
  ${tablet({ fontSize:"1rem", gridColumnEnd:"1", gridRowStart:"3", gridRowEnd:"3" })}

`
const TextDark = styled.p`
  font-size: 14px;
  color: white;
  ${tablet({justifySelf:"end", paddingTop:"-1rem", gridColumnStart:"3", gridColumnEnd:"3", gridRowStart:"1", gridRowEnd:"1" })}

`;
const DateDark = styled.p`
display: grid;
  font-size: 13px;
  color: white;
  ${tablet({gridColumnEnd:"1", gridRowStart:"2", gridRowEnd:"2", justifyContent:"center" })}

`

const TextLight = styled.p`
  font-size: 13px;
  color: grey;
  ${tablet({justifySelf:"end", paddingTop:"-1rem", gridColumnStart:"3", gridColumnEnd:"3", gridRowStart:"1", gridRowEnd:"1" })}

`
const DateLight = styled.p`
  font-size: 13px;
  color: grey;
  ${tablet({gridColumnEnd:"1", gridRowStart:"2", gridRowEnd:"2", justifyContent:"center" })}
`

const Button = styled.button`
    border: none;
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
    ${tablet({width:"9rem", height:"3rem",fontSize:"0.8rem", paddingRight:"0.6rem"})}  

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
  ${tablet({ width:"85%" })}

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
  ${tablet({ width:"85%" })}
`
const Id = styled.p`
  font-weight: bold;
  font-size: 16px;
  ${tablet({ gridColumnStar:"1", gridColumnEnd:"1", gridRowStart:"1", gridRowEnd:"1" })}
`

const ContentDark = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.7rem;
  color:white;
  ${tablet({display: "grid", justifyContent: "space-between"})}
`
const ContentLight = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.7rem;
  color:black;
  ${tablet({display: "grid", justifyContent: "space-between"})}
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
  margin-top: 1rem;
`
const Icon = styled.div`
  ${tablet({ display:"none" })}
`

const StatusContainer = styled.div`
  gap:0.4rem;
  display:inline-flex;
  ${tablet({ marginTop:"-0.8rem",gridColumnStart:"3", gridColumnEnd:"3", gridRowStart:"3",gridRowEnd:"3", justifySelf:"end"})}
`

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