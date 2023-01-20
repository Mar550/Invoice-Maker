import React,{useState, useEffect} from "react";
import styled from 'styled-components'
import google from '../assets/google-svg.svg'
import twitter from '../assets/twitter-svg.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { login, reset } from '../features/authSlice';


const Login = () => {

  const [data, setData] = useState({
    email:"",
    password:"",
  })

  const { email, password } = data

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  
  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]:input.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
    navigate('/invoices')
  }

  
  return (
    <Container>
    <FormContainer>
          <Title>
            LOGIN NOW
          </Title>
          <Social>
            <Button> <Icon src={google}/> Login With Google </Button>
            <Button> <Icon src={twitter}/> Login With Twitter </Button>
          </Social>
          <Subtitle> <Line></Line> <Span> Or your can enter using your credentials </Span> <Line></Line> </Subtitle>
          <Form onSubmit={handleSubmit}> 
            <Input 
            placeholder="Email"
            name="email"
            value={data.email} 
            onChange={handleChange} />            
            <Input 
            placeholder="Password"
            type="password"
            value={data.password}
            name="password"
            onChange={handleChange}/>
            <Submit type="submit"> 
              SUBMIT
            </Submit>
          </Form>
          <Linked> Still not registered ? Sign Up Here</Linked>
      </FormContainer>
   
    </Container>
  )
}

// STYLES

const Container = styled.div `
  background-color: #f0f0f0;
  width: 100%;
  height: 41rem;
  padding: 3rem;
  `

  const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 0.9rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width:35%; 

`
const Form = styled.form`
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
  border: 2px solid #f0f0f0;
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
const Span = styled.p`
color: #2c2a2b;
font-size: 14px;
text-align:center;
width: 75%;
margin-left: auto;
margin-right:auto;
`

export default Login;