import React, {useState, useContext, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsArrowCounterclockwise } from 'react-icons/bs';
import styled from 'styled-components'
import { ThemeContext } from '../App';
import Header from '../components/navigation/Header';
import { session } from '../features/authSlice'
import { publicRequest } from '../request';
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from 'react-router';
import { tablet } from '../responsive';
import {AiFillGithub} from 'react-icons/ai';

const Landing = () => {

    // Doing a normal authentication without redux
    const { darkMode } = useContext(ThemeContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )
  
    const randomId = uuidv4()

    const [id, setId] = useState('')

    useEffect(() => {
        setId(uuidv4)
      },[])

    console.log(id)

    const guestSession = async () => {
        await publicRequest.post('/auth/session', {id})
        .then((response) => localStorage.setItem('user', JSON.stringify(response.data)))
        .catch((error) => console.log(error))
    }

    const registerAuth = () => {
        navigate('/register')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(session({id}))
        navigate('/home');
    }
    //Both normal and redux authentication are working, and we'll only need "user" in local storage

    return (
    <>  
    <Header/>
    { darkMode ? 
    <Wrapper>
        <Container>
                <Title> Login </Title>
                <Text> This is a portfolio project developed with JavaScript, React, Node.js and Express.js.  <Span> <a href="https://github.com/Mar550/Invoice-Maker" style={{ textDecoration:"none", color:"#7c5dfa" }}> View on GitHub </a> </Span> </Text>
                <Action>
                    <Button1 onClick={handleSubmit}> View as a demo </Button1>
                    <Button2 onClick={registerAuth}> Register as a user </Button2>
                </Action>
        </Container>
    </Wrapper>
    :
    <WrapperLight>
        <ContainerLight>
                <TitleLight> Login </TitleLight>
                <TextLight> This is a portfolio project developed with JavaScript, React, Node.js and Express.js. <Span> <a href="https://github.com/Mar550/Invoice-Maker" style={{ textDecoration:"none", color:"#7c5dfa" }}> View on GitHub </a>  </Span> </TextLight>
                <Action>
                    <Button1Light> View as a demo </Button1Light>
                    <Button2Light> Register as a user </Button2Light>
                </Action>
        </ContainerLight>
    </WrapperLight>
    }
    </>
  )
}

const Wrapper = styled.div`
    background-color: #141625;
    width: 100%;
    height: 100vh;
    padding-top: 8rem;
`
const WrapperLight = styled.div`
    background-color: #f8f8fb;
    width: 100%;
    height: 100vh;
    padding-top: 8rem;
`
const Container = styled.div`
    background-color: #1e2139;
    width: 80vh;
    margin-left:auto;
    margin-right:auto;
    padding: 2.5rem 2rem 2.5rem 2rem;
    border-radius: 0.5rem;
    ${tablet({width: "70vh"})}  
    ${tablet({padding: "2.2rem 1.6rem 2.2rem 1.6rem"})}  
`

const ContainerLight = styled.div`
    background-color: white;
    width: 80vh;
    margin-left:auto;
    margin-right:auto;
    padding: 2.5rem 2rem 2.5rem 2rem;
    border-radius: 0.5rem;
    ${tablet({width: "70vh"})} 
    ${tablet({padding: "2.2rem 1.6rem 2.2rem 1.6rem"})}  
 
`
const Title = styled.p`
    color: white;
    text-align:center; 
    font-weight: bold;
    font-size: 38px;
    letter-spacing: 2px; 
    ${tablet({fontSize: "32px"})}  

`
const Text = styled.p`
    color: white;
    text-align:center;
    font-size: 1rem;
    line-height: 30px;
`
const TitleLight = styled.p`
    color: black;
    text-align:center;
    font-weight: bold;
    font-size: 2.2rem;  
    letter-spacing: 2px; 
    ${tablet({fontSize: "32px"})}  
`
const TextLight = styled.p`
    color: black;
    text-align:center;
    font-size: 1rem;
    line-height: 30px;
`

const Action = styled.div`
    display: flex;
    flex-direction:row;
    gap: 1rem;
    justify-content:center;
    padding: 1rem;
`


const Span = styled.span`
    color: #7c5dfa;
    font-weight: bold;
    cursor:pointer;
`

const Button1 = styled.button`
    background-color: #373b53;
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
    ${tablet({padding: "0 1.2rem"})}  

`

const Button2 = styled.button`
    background-color: #7c5dfa;
    font-weight:bold;
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
    ${tablet({padding: "0 1.2rem"})}  

`

const Button1Light = styled.button`
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
background: #373b53;
color: #888eb0;
${tablet({padding: "0 1.2rem"})}  

`

const Button2Light = styled.button`
    background-color: #373b53;
    font-weight:bold;
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
    background: #7c5dfa;
    color: #fff;
    ${tablet({padding: "0 1.2rem"})}  
`





export default Landing;