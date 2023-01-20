import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import google from '../assets/google-svg.svg'
import twitter from '../assets/twitter-svg.svg'
import data2 from '../assets/data2.svg'
import { publicRequest } from '../request';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../features/authSlice';


const Register = () => {

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
      const userData = {
        username,
        email,
        password
      }
      dispatch(register(userData))
  };

  return (
    <>
    <Wrapper>
      <Container>
        <FormContainer>
          <Title>
            SIGN UP TO JOIN US !
          </Title>
          <Social>
            <Button> <Icon src={google}/> Sign up With Google </Button>
            <Button> <Icon src={twitter}/> Sign up With Twitter </Button>
          </Social>
          <Subtitle> <Line></Line> <Text> Or your can register with your email </Text> <Line></Line> </Subtitle>
          <Form> 
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
            <Submit type="submit" onClick={handleSubmit}> 
              CREATE AN ACCOUNT
            </Submit>
          </Form>
          <Linked> <Link to="/login" style={{color:"black", textDecoration: "none"}}> Already have an account ? Sign In Here </Link> </Linked>
        </FormContainer>
        <ImgContainer>
          <Image src={data2}/>
        </ImgContainer>
      </Container>
    </Wrapper>
  </>
  )
}

// STYLES

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: #f0f0f0;
`
const Container = styled.div`
  background-color: white;
  padding: 3rem;
  display:flex;
  flex-direction: row;
  border-radius: 10px;
  gap: 1rem;
  width: 84%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 0.7rem;
`
const Form = styled.form`
display: flex;
  flex-direction: column;
  gap: 0.7rem;

`
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  text-align:center;
`
const Social = styled.div`
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
  font-weight: bold;
  background-color: #3c0d99;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
  border:none;
  &:hover {
    background-color: black;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;

`
const Image = styled.img`
  width: 80%;
  margin-top: 20%;
  margin-left: 10%;
`
const Text = styled.p`
  color: #2c2a2b;
  font-size: 14px;
  text-align:center;
  width: 75%;
  margin-left: auto;
  margin-right:auto;
`
const Linked = styled.p`
  margin-top: 0.5rem;
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

export default Register