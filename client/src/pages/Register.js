import React,{useState, useEffect, useContext} from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../features/authSlice';
import Header from "../components/navigation/Header";
import { ThemeContext } from "../App";
import { tablet } from '../responsive';


const Register = () => {

  const { darkMode } = useContext(ThemeContext)

  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
    password2:"",
  })

  const { username,email, password} = data
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]:input.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      if (data.password == data.password2){
      const userData = {
        username,
        email,
        password
      }
      dispatch(register(userData))
      navigate('/home')
    } else {
      alert("Passwords do not match")
    }
  };
 
  return (
    <>  
    <Header/>
    { darkMode ? 
    <Wrapper>
      <Container>
          <Title>
            Register
          </Title>
            <Form onSubmit={handleSubmit}> 
            <Input 
            placeholder="Username" 
            value={data.username} 
            onChange={handleChange}
            name="username" />            
            <Input 
            placeholder="Email"
            value={data.email} 
            onChange={handleChange}
            name="email" />            
            <Input 
            placeholder="Password"
            type="password"
            value={data.password} 
            onChange={handleChange}
            name="password" />
            <Input 
            placeholder="Confirm password"
            type="password"
            value={data.password2} 
            onChange={handleChange}
            name="password2" />
            <Submit type="submit" onClick={handleSubmit}> 
              Create an account
            </Submit>
          </Form>
          <Link to="/login" style={{textDecoration:"none"}}> <Linked> Already registered ? Sign In Here</Linked> </Link>
      </Container>
    </Wrapper>
    :
    <WrapperLight>
      <ContainerLight>
          <Title>
            Register
          </Title>
            <Form onSubmit={handleSubmit}> 
            <Input 
            placeholder="Username" 
            value={data.username} 
            onChange={handleChange}
            name="username" />            
            <Input 
            placeholder="Email"
            value={data.email} 
            onChange={handleChange}
            name="email" />            
            <Input 
            placeholder="Password"
            type="password"
            value={data.password} 
            onChange={handleChange}
            name="password" />
            <Input 
            placeholder="Confirm password"
            type="password"
            value={data.password2} 
            onChange={handleChange}
            name="password2" />
            <Submit type="submit" onClick={handleSubmit}> 
              Create an account
            </Submit>
          </Form>
          <Link to="/login" style={{textDecoration:"none"}}> <LinkedLight> Already registered ? Sign In Here</LinkedLight> </Link>
      </ContainerLight>
    </WrapperLight>
    }
    </>
  )
}

// STYLES

const Wrapper = styled.div `
background-color: #141625;
  width: 100%;
  height: 41rem;
  padding: 3rem;
  `

  const WrapperLight = styled.div `
  background-color: #f0f0f0;
  width: 100%;
  height: 41rem;
  padding: 3rem;
  `

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 0.9rem;
  padding: 2.1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: #1e2139;
  width:38%; 
  color:white;
  ${tablet({width: "70%"})} 

`
const ContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 0.9rem;
  padding: 2.1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width:38%; 
  ${tablet({width: "70%"})} 
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1rem;
`
const Title = styled.h1`
  font-size: 38px;
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
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  height: 2.5rem;
  padding: 1rem;
  &:hover{
    cursor:text;
  }
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
  font-size: 1.2rem;
  font-weight:bold;
  &:hover {
    background-color: #3c0d99;
  }
  ${tablet({fontSize: "1.1rem"})} 

`
const Text = styled.p`
  color: #2c2a2b;
  font-size: 15px;
  width: 75%;

`

const Linked = styled.p`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align:center;
  &:hover{
    cursor:pointer;
    opacity:0.7;
  }
`
const LinkedLight = styled.p`
  color: #2c2a2b;
  font-weight: bold;
  font-size: 16px;
  text-align:center;
  &:hover{
    cursor:pointer;
    opacity: 0.7;
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
const Span = styled.p`
color: #2c2a2b;
font-size: 14px;
text-align:center;
width: 75%;
margin-left: auto;
margin-right:auto;
`

export default Register;