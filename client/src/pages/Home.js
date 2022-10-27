import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Img from '../assets/home.svg';
import google from '../assets/google-svg.svg'
import twitter from '../assets/twitter-svg.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  padding: 3rem;
  display:flex;
  flex-direction: row;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width:75%;
`
const Right = styled.div`
margin-right: 7.5rem;
width: 75%;`

const Span = styled.p`
color: #2c2a2b;
font-size: 14px;
text-align:center;
width: 75%;
margin-left: auto;
margin-right:auto;
`

const Header = styled.div`
`
const Title2 = styled.h1``
const Title3 = styled.span`
  color:#6415FF;
`
const Image = styled.img`
width: 120%;
float: left;
`

const Text2 = styled.p``

const FormContainer = styled.div`
  margin-top: 1rem; 
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 0.9rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`
const Title = styled.h1`
  margin-top: 1rem;
  font-size: 28px;
  font-weight: 800;
  text-align:center;
`
const Social = styled.div`
  margin-top: 1rem;
  display:flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const Input = styled.input`
  background-color: #f0f0f0;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  height: 2.3rem;
`
const Button = styled.button`
  height: 2.8rem;
  border:none;
  border-radius: 5px;
  gap: 1rem;
`
const Icon = styled.img`
  width: 2rem;
`
const Submit = styled.button`
  margin-top: 1rem;
  border-radius: 5px;
  color: white;
  background-color: #6415FF;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
  border:none;
  &:hover {
    background-color: #3c0d99;
  }
`
const Text = styled.p`
  color: #2c2a2b;
  font-size: 15px;
  width: 75%;

`
const Linked = styled.p`
  color: #2c2a2b;
  font-weight: bold;
  font-size: 16px;
  text-align:center;
  &:hover{
    cursor:pointer
  }
`
const Subtitle = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 80%;
  margin-left:auto;
  margin-right: auto;
`
const Line = styled.div`
  border: 1px solid black;
  margin-top: 12px;
  height:1px;
  width: 20%;
`
const Started = styled.div`
  border: 1px solid grey;
  border-radius: 25px;
  width: 70%;
  &:hover{
    border: 2px solid #6415FF;
  }
`
const InputStart = styled.input`
border: none;
margin-top: 0.6rem;
margin-left: 5px;
`
const Start = styled.button`
  color: white;
  font-size: 18px;
  background-color: #6415FF;
  border: none;
  width: 40%;
  height: 3rem;
  border-radius: 20px;
  float:right;
`

const Home = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Container>
        <Left>
          <Header>
          <Title2> A simple and practical invoicing appplication <Title3> for you </Title3> </Title2>
          </Header>
          <Text> Our application is easy to understand, complete and practical to use. You'll find all the tools you need to handle effectively your invoicing system.</Text>
          <Started> 
              <InputStart placeholder="Your E-mail Adress" />
              <Start> Get Started </Start>
          </Started>
          
        </Left>
        <Right>
          <Image src={Img}/>
        </Right>
      </Container>
    </Wrapper>
  )
}


export default Home