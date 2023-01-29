import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';

// UI Icons
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {MdLightMode} from 'react-icons/md';
import {MdModeNight} from 'react-icons/md';

// Components
import Header from '../../components/navigation/Header';
import Edit from './Edit';
import Paid from '../../components/status/Paid';
import Pending from '../../components/status/Pending';
import Draft from '../../components/status/Draft';


const Invoice = (props) => {

  const [invoice, setInvoice] = useState([])
  const [items, setItems] = useState([])
  const { darkMode } = useContext(ThemeContext)

  const getInvoice = async () => {
    axios.get(`http://localhost:5000/api/invoice/find/` + id)
      .then(res => {
    const result = res.data;
    setInvoice(result);
    setItems(result.items);
    })
  };

  useEffect(() => {
    getInvoice()
  },[])

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [buttonEdit, setButtonEdit] = useState(false);

  const deleteInvoice = async () => {
    await axios.delete('http://localhost:5000/api/invoice/delete/' + id)
    .then(navigate("/invoices"))
    .catch(error => console.log(error))
  }

  function updateStatus() {
    axios.put('http://localhost:5000/api/invoice/update/'+id, invoice)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

  const editStatus = () => {
    setInvoice((invoice) => {
      return({
        ...invoice,
        status:'Paid'
      });
    });
  }

  useEffect(() => {
      updateStatus(); // This function will be executed when `invoice` state changes
  }, [invoice]);

  const paidInvoice =  () => {   
    editStatus();
  }

  // Function Amount Due
  function dueAmount(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i].price*array[i].quantity;
    }
    return sum
  }

  // Function Format Dates
  function formatDate(myDate) {
    return Moment(new Date(myDate)).format("DD MMM YYYY");
  }

  return (
    <>
    { darkMode ? 
    <WrapperDark>
    <Header/>
    <Link to="/invoices" style={{marginTop:"4rem", cursor:"pointer",paddingLeft:"6rem", color:"white", marginLeft:"12.5%"}}>
      <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem", fontWeight:"700"}}/> <LabelDark style={{cursor:"pointer"}} > Go Back </LabelDark> 
    </Link>
    <ContainerDark>
      <div style={{display:"inline-flex",gap:"2rem",marginTop:"0.6rem"}}>  
        <Dark style={{marginTop:"0.3rem"}}> Status </Dark>
          {
            invoice.status == "Paid" ? <Paid/>
            : invoice.status == "Pending" ? <Pending/>
            :  <Draft mode={darkMode} />
          } 
      </div>
      <div style={{display:"inline-flex",gap:"1rem"}}> 
        <Action onClick={() => setButtonEdit(true)} style={{backgroundColor:"#252945"}}> Edit </Action>
        <Action onClick={deleteInvoice} style={{backgroundColor:"#ec5757"}}> Delete </Action>
        <Action onClick={paidInvoice} style={{backgroundColor:"#7c5dfa", width:"8rem"}}> Mark as Paid </Action>
      </div>
    </ContainerDark>
    <Container2Dark>
      <div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div>
            <Id> <Span>#</Span> {id.slice(0,8).toUpperCase()} </Id>
            <Dark> Re-branding </Dark>
            </div>
            <div style={{width:"7rem"}}>
            <Dark> {invoice.address + ', ' + invoice.city + ' ' + invoice.postcode + ' ' + invoice.country} </Dark>
            </div>
        </div>
    <div style={{display:"inline-flex", gap:"20%"}}> 
    <div style={{display:"flex", flexDirection:"column"}}>
      <Group>
        <LabelDark> Invoice Date </LabelDark>
        <Text2Dark> {formatDate(invoice.date)} </Text2Dark>
      </Group>
      <Group>
        <LabelDark> Payment Due </LabelDark>
        <Text2Dark> {formatDate(invoice.term)} </Text2Dark>
      </Group>
    </div>
    <Group>
      <LabelDark> Bill To </LabelDark>
      <Text2Dark> {invoice.client_name} </Text2Dark>
      <Dark style={{width:"10rem"}}> {invoice.client_address + ' ' + invoice.client_code + ' ' + invoice.client_city + ' ' + invoice.client_country} </Dark>
    </Group>
    <Group>
      <LabelDark> Sent To </LabelDark>
      <Text2Dark> {invoice.client_email} </Text2Dark>
    </Group>
    </div>
    </div>
    <Container3Dark>
      <Row>
        <Dark> Item Name </Dark>
        <Dark> QTY. </Dark>
        <Dark> Price </Dark>
        <Dark> Total </Dark>
      </Row>
      {items.map(item => (
        <Row style={{fontWeight:"bold"}}>
          <Dark> {item.name}</Dark>
          <Dark> {item.quantity} </Dark>
          <Dark> {item.price} $ </Dark>
          <Dark> $ {item.quantity*item.price} </Dark>
        </Row>
        //toFixed(2)
      ))}
    </Container3Dark>
    <Container4Dark>
      <Row>
        <Text2Dark> Amount Due </Text2Dark>
        <Dark style={{fontSize:"1.2rem",fontWeight:"bold"}}> $ {dueAmount(items)} </Dark>
      </Row>

    </Container4Dark>
    </Container2Dark>
    </WrapperDark> 
    :
    <WrapperLight>
    <Header/>
    <Link to="/invoices" style={{marginTop:"4rem", cursor:"pointer",paddingLeft:"6rem", color:"white", marginLeft:"12.5%"}}>
      <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem", fontWeight:"700"}}/> <LabelLight style={{cursor:"pointer"}} > Go Back </LabelLight> 
    </Link>
    <ContainerLight>
      <div style={{display:"inline-flex",gap:"2rem",marginTop:"0.6rem"}}>  
        <Light style={{marginTop:"0.3rem"}}> Status </Light>
        {
            invoice.status == "Paid" ? <Paid/>
            : invoice.status == "Pending" ? <Pending/>
            :  <Draft mode={darkMode} />
          }
      </div>
      <div style={{display:"inline-flex",gap:"1rem"}}> 
        <Action onClick={()=>setButtonEdit(true)} style={{backgroundColor:"#252945"}}> Edit </Action>
        <Action onClick={deleteInvoice} style={{backgroundColor:"#ec5757"}}> Delete </Action>
        <Action onClick={paidInvoice} style={{backgroundColor:"#7c5dfa", width:"8rem"}}> Mark as Paid </Action>
      </div>
    </ContainerLight>
    <Container2Light>
      <div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div>
            <Id> <Span>#</Span> {id.slice(0,8).toUpperCase()} </Id>
            <Light> Re-branding </Light>
            </div>
            <div style={{width:"7rem"}}>
            <Light> {invoice.address + ', ' + invoice.city + ' ' + invoice.postcode + ' ' + invoice.country} </Light>
            </div>
        </div>
    <div style={{display:"inline-flex", gap:"20%"}}> 
    <div style={{display:"flex", flexDirection:"column"}}>
      <Group>
        <LabelLight> Invoice Date </LabelLight>
        <Text2Light> {formatDate(invoice.date)}</Text2Light>
      </Group>
      <Group>
        <LabelLight> Payment Due </LabelLight>
        <Text2Light> {formatDate(invoice.term)}</Text2Light>
      </Group>
    </div>
    <Group>
      <LabelLight> Bill To </LabelLight>
      <Text2Light> {invoice.client_name} </Text2Light>
      <Light style={{width:"10rem"}}> {invoice.client_address + ' ' + invoice.client_code + ' ' + invoice.client_city + ' ' + invoice.client_country} </Light>
    </Group>
    <Group>
      <LabelLight> Sent To </LabelLight>
      <Text2Light> {invoice.client_email} </Text2Light>
    </Group>
    </div>
    </div>
    <Container3Light>
      <Row>
        <Light> Item Name </Light>
        <Light> QTY. </Light>
        <Light> Price </Light>
        <Light> Total </Light>
      </Row>
      {items.map(item => (
        <Row style={{fontWeight:"bold"}}>
          <Light> {item.name}</Light>
          <Light> {item.quantity} </Light>
          <Light> {item.price} $ </Light>
          <Light> $ {item.quantity*item.price} </Light>
        </Row>
        //toFixed(2)
      ))}
    </Container3Light>
    <Container4Light>
      <Row>
        <Text2Dark> Amount Due </Text2Dark>
        <Dark style={{fontSize:"1.2rem",fontWeight:"bold"}}> $ {dueAmount(items)} </Dark>
      </Row>

    </Container4Light>

    </Container2Light>
    </WrapperLight>
    }
    
    <Edit 
      trigger={buttonEdit} 
      setTrigger={setButtonEdit} 
      />
    </>
  )
}

// STYLES

// Container

const WrapperDark = styled.div`
  display:flex;
  flex-direction: column; 
  background: #141625;
  width: 100%;
  height: 65rem;
  font-size: 0.5rem;
`
const WrapperLight = styled.div`
  display:flex;
  flex-direction: column; 
  background-color: #f8f8fb;
  width: 100%;
  height: 65rem;
  font-size: 0.5rem;
`


const ContainerDark = styled.div`
  margin-top: 1rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  background-color: #1e2139; 
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
`

const ContainerLight = styled.div`
  margin-top: 1rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  background-color: white; 
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
`

const Dark = styled.p`
  color: white;
  font-size: 15px;
`

const Light = styled.p`
  color: grey;
  font-size: 15px;
`

const Text2Dark = styled.p`
  color: white;
  font-size: 17px;
  font-weight: bold;
`

const Text2Light = styled.p`
  color: black;
  font-size: 17px;
  font-weight: bold;
`

const Status = styled.div`
    font-size: 1.2rem;
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
    box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
    cursor: pointer;
    color: #33d69f;
`

const StatusLight = styled.div`
    font-size: 1.2rem;
    letter-spacing: -.25px;
    display: flex;
    align-items: center;
    height: 2.5rem;
    min-width: 6.5rem;
    justify-content: center;
    background-color: rgba(51,214,159,.0571);
    font-weight: 700;
    border-radius: 6px;
    margin-top: -0.6rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
    cursor: pointer;
    color: #33d69f;
`
const Li = styled.li`
  color: #33d69f;
  font-size: 1rem;
`
const Action = styled.button`
    width: 6rem;
    height: 3rem;
    padding: 0 1.5rem;
    border-radius: 1.5rem;
    border: none;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    white-space: nowrap;
    font-size: .9rem;
    line-height: .9375rem;
    letter-spacing: -.25px;
    font-weight: 700;
    color: white;
`
const Id = styled.p`
  font-weight: bold;
  display: inline-flex;
  font-size: 1.2rem;
`
const Span = styled.span`
  color:#6b52d6;
`
const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 10rem;
`
const LabelDark = styled.label`
    font-size: 14px;
    color: white;
`
const LabelLight = styled.label`
    font-size: 14px;
    color:black;
`


const Container2Dark = styled.div`
  margin-top: 1rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  background-color: #1e2139; 
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
`

const Container2Light = styled.div`
  margin-top: 1rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  background-color: white; 
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
`

const Container3Dark = styled.div`
  margin-top: 2rem;
  background-color:#252945;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
`

const Container3Light = styled.div`
  margin-top: 2rem;
  background-color:#f9fafe;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  color: black;
`

const Container4Dark = styled.div`
  background-color: #0c0e16;
  padding: 1.5rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
`

const Container4Light = styled.div`
  background-color: #0c0e16;
  padding: 1.5rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  color: white;
`

const Row = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

export default Invoice;