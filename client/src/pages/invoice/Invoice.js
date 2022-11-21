import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import Switch from "react-switch";
import {MdOutlineNightlightRound} from 'react-icons/md';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

// Container
const Wrapper = styled.div`
  display:flex;
  flex-direction: column; 
  background-color: #141625;
  width: 100%;
  height: 65rem;
  font-size: 0.5rem;
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
const Container = styled.div`
  margin-top: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #1e2139; 
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`

const Text = styled.p`
  color: white;
  font-size: 16px;
`

const Text2 = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
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
const Label = styled.label`
    font-size: 15px;
`
const Title = styled.h3`
    font-weight:bold;
    font-size: 1.3rem;
    margin-top: 4rem;
`
const Container2 = styled.div`
  margin-top: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #1e2139; 
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`

const Container3 = styled.div`
  margin-top: 5rem;
  background-color:#252945;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
`

const Container4 = styled.div`
  background-color: #0c0e16;
  padding: 2rem 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
`

const Row = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

const Invoice = () => {
  return (
    <Wrapper>
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
    <div style={{marginTop:"4rem", cursor:"pointer",paddingLeft:"6rem", color:"white"}}>
      <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem"}}/> <Label > Go Back </Label> 
    </div>
    <Container>
    
      <div style={{display:"inline-flex",gap:"2rem",marginTop:"0.6rem"}}>  
        <Text style={{marginTop:"0.3rem"}}> Status </Text>
        <Status> <Li>Paid</Li> </Status>
      </div>
      <div style={{display:"inline-flex",gap:"1rem"}}> 
        <Action style={{backgroundColor:"#252945"}}> Edit </Action>
        <Action style={{backgroundColor:"#ec5757"}}> Delete </Action>
      </div>
    </Container>
    <Container2>
      <div>
    <Id> <Span>#</Span> FO5030 </Id>
    <Text> Re-branding </Text>
    <Text style={{marginTop:"-15px"}}> 19 Union Terrace London E1 3EZ United Kingdom </Text>
    <div style={{display:"inline-flex", gap:"20%"}}> 
    <div style={{display:"flex", flexDirection:"column"}}>
    <Group>
      <Label> Invoice Date </Label>
      <Text2> 18 Aug 2021 </Text2>
    </Group>

    <Group>
      <Label> Payment Due </Label>
      <Text2> 19 Aug 2021 </Text2>
    </Group>
    </div>
    <Group>
      <Label> Bill To </Label>
      <Text2> Jensen Huang </Text2>
      <Text style={{width:"10rem"}}> 106 Kendell Street Sharrington NR24 5WQ United Kingdom </Text>
    </Group>
    
    <Group>
      <Label> Sent To </Label>
      <Text2> jensen@gmail.com </Text2>
    </Group>
    </div>
    </div>
    <Container3>
      <Row>
        <Text> Item Name </Text>
        <Text> QTY. </Text>
        <Text> Price </Text>
        <Text> Total </Text>
      </Row>
      <Row style={{fontWeight:"bold"}}>
        <Text> Brand Guidelines </Text>
        <Text> 1 </Text>
        <Text> $1,800.90 </Text>
        <Text> $1,800.90 </Text>
      </Row>
    </Container3>
    <Container4>
      <Row>
        <Text> Amount Due </Text>
        <Text style={{fontSize:"1.4rem",fontWeight:"bold"}}> $1,800.90 </Text>
      </Row>
    </Container4>

    </Container2>
    </Wrapper>
  )
}

export default Invoice