import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { UserContext } from '../../App';
import { publicRequest } from '../../request';
import { tablet } from '../../responsive';

// UI Icons
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew, MdSettingsBackupRestore } from 'react-icons/md';
import {MdLightMode} from 'react-icons/md';
import {MdModeNight} from 'react-icons/md';

// Components
import Header from '../../components/navigation/Header';
import Edit from './Edit';
import Paid from '../../components/status/Paid';
import Pending from '../../components/status/Pending';
import Draft from '../../components/status/Draft';
import Loading from '../../components/navigation/Loading';


const Invoice = (props) => {

  const [invoice, setInvoice] = useState([])
  const [items, setItems] = useState([])
  const { darkMode } = useContext(ThemeContext)
  const { user, setUser } = useContext(UserContext)

  const [loading, setLoading] = useState(false)

  const getInvoice = async () => {
    await publicRequest.get(`/invoice/find/` + id)
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
    await publicRequest.delete('/invoice/delete/' + id)
    .then(window.location.replace("/home"))
    .catch(error => console.log(error))
  }
  
  const updateStatus = async () => {
    await publicRequest.put('/invoice/update/'+id, invoice)
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

  // Function format numbers
  function numberFormat(number){
    return number.toLocaleString('en-US',{'minimumFractionDigits':2,'maximumFractionDigits':2});
  }  
  
  return (
    <>
      { Object.keys(invoice).length > 0 ?  
      <div>
      { darkMode ? 
      <WrapperDark>
      <Header/>
      <Head>
        <Link to="/home">
          <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.8rem", fontWeight:"700"}}/> <LabelDark style={{cursor:"pointer", fontSize:"0.9rem"}} > Go Back </LabelDark> 
        </Link>
      </Head>
      <ContainerDark>
        <Status2>  
          <Dark style={{marginTop:"0.3rem"}}> Status </Dark>
            {
              invoice.status == "Paid" ? <Paid/>
              : invoice.status == "Pending" ? <Pending/>
              : <Draft mode={darkMode} />
            } 
        </Status2>
          { invoice.status == "Paid" ? 
            <Buttons> 
              <Action onClick={() => setButtonEdit(true)} style={{backgroundColor:"#252945"}}> Edit </Action>
              <Action onClick={deleteInvoice} style={{backgroundColor:"#ec5757"}}> Delete </Action>
            </Buttons>
            : 
            <Buttons> 
              <Action onClick={() => setButtonEdit(true)} style={{backgroundColor:"#252945"}}> Edit </Action>
              <Action onClick={deleteInvoice} style={{backgroundColor:"#ec5757"}}> Delete </Action>
              <Action onClick={paidInvoice} style={{backgroundColor:"#7c5dfa", width:"8rem"}}> Mark as Paid </Action>
            </Buttons>
          }
      </ContainerDark>
      <Container2Dark>
        <div>
          <Wrapper1>
              <div>
              <Id> <Span>#</Span> {id.slice(0,8).toUpperCase()} </Id>
                <Dark> {invoice.description} </Dark>
              </div>
              <div style={{width:"7rem"}}>
                <Dark> {invoice.address + ', ' + invoice.city + ' ' + invoice.postcode + ' ' + invoice.country} </Dark>
              </div>
          </Wrapper1>
      <Wrapper6> 
      <Wrapper2>
        <Group>
          <LabelDark> Invoice Date </LabelDark>
          <Text2Dark> {formatDate(invoice.date)} </Text2Dark>
        </Group>
        <Group>
          <LabelDark> Payment Due </LabelDark>
          <Text2Dark> {formatDate(invoice.term)} </Text2Dark>
        </Group>
      </Wrapper2>
      <Wrapper3>
      <Group>
        <LabelDark> Bill To </LabelDark>
        <Text2Dark> {invoice.client_name} </Text2Dark>
        <Dark style={{width:"10rem"}}> {invoice.client_address + ' ' + invoice.client_code + ' ' + invoice.client_city + ' ' + invoice.client_country} </Dark>
      </Group>
      </Wrapper3>
      <Wrapper4>
      <Group>
        <LabelDark> Sent To </LabelDark>
        <Text2Dark> {invoice.client_email} </Text2Dark>
      </Group>
      </Wrapper4>
      </Wrapper6>
      </div>
      <Container3Dark>
        <Row>
          <Dark> Item Name </Dark>
          <Dark> QTY. </Dark>
          <Wrapper5>
          <Dark> Price </Dark>
          </Wrapper5>
          <Dark> Total </Dark>
        </Row>
        {items.map(item => (
          <Row style={{fontWeight:"bold"}} key={item.id}>
            <Dark> {item.name}</Dark>
            <Dark> {item.quantity} </Dark>
            <Wrapper5>
            <Dark> {numberFormat(item.price)} £ </Dark>
            </Wrapper5>
            <Dark> £ {numberFormat(item.quantity*item.price)} </Dark>
          </Row>
          //toFixed(2)
        ))}
      </Container3Dark>
      <Container4Dark>
        <Row>
          <Text2Dark> Amount Due </Text2Dark>
          <Dark style={{fontSize:"1.2rem",fontWeight:"bold"}}> £ {dueAmount(items)} </Dark>
        </Row>

      </Container4Dark>
      </Container2Dark>
      </WrapperDark> 
      :
      <WrapperLight>
      <Header/>
      <Link to="/home" style={{marginTop:"4rem", cursor:"pointer",paddingLeft:"6rem", color:"white", marginLeft:"12.5%"}}>
        <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem", fontWeight:"700"}}/> <LabelLight style={{cursor:"pointer", fontSize:"0.9rem"}} > Go Back </LabelLight> 
      </Link>
      <ContainerLight>
        <Status2>  
          <Light style={{marginTop:"0.3rem"}}> Status </Light>
            {
              invoice.status == "Paid" ? <Paid/>
              : invoice.status == "Pending" ? <Pending/>
              : <Draft mode={darkMode} />
            }
        </Status2>
        { invoice.status == "Paid" ? 
            <ButtonsLight> 
              <Action onClick={() => setButtonEdit(true)} style={{backgroundColor:"#252945"}}> Edit </Action>
              <Action onClick={deleteInvoice} style={{backgroundColor:"#ec5757"}}> Delete </Action>
            </ButtonsLight>
            : 
            <ButtonsLight> 
              <Action onClick={() => setButtonEdit(true)} style={{backgroundColor:"#252945"}}> Edit </Action>
              <Action onClick={deleteInvoice} style={{backgroundColor:"#ec5757"}}> Delete </Action>
              <Action onClick={paidInvoice} style={{backgroundColor:"#7c5dfa", width:"8rem"}}> Mark as Paid </Action>
            </ButtonsLight>
          }
      </ContainerLight>
      <Container2Light>
        <div>
          <Wrapper1>
            <div>
              <Id> <Span>#</Span> {id.slice(0,8).toUpperCase()} </Id>
              <Light> Re-branding </Light>
            </div>
            <div style={{width:"7rem"}}>
              <Light> {invoice.address + ', ' + invoice.city + ' ' + invoice.postcode + ' ' + invoice.country} </Light>
            </div>
          </Wrapper1>
          <Wrapper6> 
      <Wrapper2>
        <Group>
          <LabelLight> Invoice Date </LabelLight>
          <Text2Light> {formatDate(invoice.date)}</Text2Light>
        </Group>
        <Group>
          <LabelLight> Payment Due </LabelLight>
          <Text2Light> {formatDate(invoice.term)}</Text2Light>
        </Group>
      </Wrapper2>
        <Wrapper3>
          <Group>
            <LabelLight> Bill To </LabelLight>
            <Text2Light> {invoice.client_name} </Text2Light>
            <Light style={{width:"10rem"}}> {invoice.client_address + ' ' + invoice.client_code + ' ' + invoice.client_city + ' ' + invoice.client_country} </Light>
          </Group>
        </Wrapper3>
      <Wrapper4>
        <Group>
          <LabelLight> Sent To </LabelLight>
          <Text2Light> {invoice.client_email} </Text2Light>
        </Group>
      </Wrapper4>
      </Wrapper6> 
      </div>
      <Container3Light>
        <Row>
          <Light> Item Name </Light>
          <Light> QTY. </Light>
          <Light> Price </Light>
          <Light> Total </Light>
        </Row>
        {items.map(item => (
          <Row style={{fontWeight:"bold"}} key={item.id}>
            <Light> {item.name}</Light>
            <Light> {numberFormat(item.quantity)} </Light>
            <Light> {numberFormat(item.price)} £ </Light>
            <Light> £ {item.quantity*item.price} </Light>
          </Row>
          //toFixed(2)
        ))}
      </Container3Light>
      <Container4Light>
        <Row>
          <Text2Dark> Amount Due </Text2Dark>
          <Dark style={{fontSize:"1.2rem",fontWeight:"bold"}}> £ {dueAmount(items)} </Dark>
        </Row>

      </Container4Light>

      </Container2Light>
      </WrapperLight>
      }  
      <Edit trigger={buttonEdit} setTrigger={setButtonEdit} />
      </div>
      :
      <Loading/>
    }
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
  height: auto;
  font-size: 0.5rem;
  padding-bottom: 3rem;
`
const WrapperLight = styled.div`
  display:flex;
  flex-direction: column; 
  background-color: #f8f8fb;
  width: 100%;
  height: auto;
  font-size: 0.5rem;
  padding-bottom: 3rem;
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
  ${tablet({width: "80%"})}  

`

const Head = styled.div`
  width: 45%;
  display:flex;
  justify-content: center;
  margin-top: 4rem;
  cursor: pointer;
  color: white;
  ${tablet({width:"30%"})} 
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
  ${tablet({width: "80%"})}  

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

const Status2 = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;
margin-top: 0.4rem;
${tablet({width:"100%",justifyContent:"space-between"})};

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
    ${tablet({ width: "5rem", height: "2.5rem", fontSize: "0.8rem"})}  

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
  ${tablet({display: "grid", width:"80%"})};
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
  ${tablet({display: "grid", width:"80%"})};
`

const Container3Dark = styled.div`
  margin-top: 2rem;
  background-color:#252945;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  ${tablet({ marginTop: "7.5rem", gridColumnStart: "1", gridColumnEnd: "3", gridRowStart: "4", gridRowEnd: "4"})}  

`

const Container3Light = styled.div`
  margin-top: 2rem;
  background-color:#f9fafe;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  color: black;
  ${tablet({ marginTop: "7.5rem", gridColumnStart: "1", gridColumnEnd: "3", gridRowStart: "4", gridRowEnd: "4"})}  
`

const Container4Dark = styled.div`
  background-color: #0c0e16;
  padding: 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  ${tablet({gridColumnStart: "1", gridColumnEnd: "3",gridRowStart: "5", gridRowEnd: "5"})}  
`

const Container4Light = styled.div`
  background-color: #0c0e16;
  padding: 1.5rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  color: white;
  ${tablet({gridColumnStart: "1", gridColumnEnd: "3",gridRowStart: "5", gridRowEnd: "5"})}  
`

const Row = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${tablet({ width:"100%", display: "grid", gridColumnStart: "1", gridColumnEnd:"1"})}  
` 

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet({gridColumnStart: "1", gridColumnEnd:"1", gridRowStart: "2", gridRowEnd: "2"})}  
`
const Wrapper3 = styled.div`
  ${tablet({gridColumnStart: "2", gridColumnEnd:"2", gridRowStart: "2", gridRowEnd: "2", justifySelf:"end"})}  

`
const Wrapper4 = styled.div`
  width: 80%;
  ${tablet({ gridColumnStart: "1", gridColumnEnd:"1", gridRowStart: "3", gridRowEnd: "3"})}  
`

const Wrapper5 = styled.div`
  ${tablet({display: "none"})}  
`

const Wrapper6 = styled.div`
  display: inline-flex;
  gap: 20%;
  ${tablet({display: "grid"})}  
`

const Buttons = styled.div`
  display: inline-flex;
  gap: 1rem;
  justify-content:center;
  ${tablet({position:"fixed", left:"0rem", bottom:"0.1rem", padding:"1rem", width:"100%", backgroundColor:"#1e2139"})}  
`

const ButtonsLight = styled.div`
  display: inline-flex;
  gap: 1rem;
  justify-content:center;
  ${tablet({position:"fixed", left:"0rem", bottom:"0.1rem", padding:"1rem", width:"100%", backgroundColor:"white"})}  
`

export default Invoice;