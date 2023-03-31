import React, {useContext} from 'react'
import styled from 'styled-components'
import Header from '../components/navigation/Header'
import error from '../assets/404.svg'
import { ThemeContext } from '../App';

const Error = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
    <>
    <Header/>
    {
    darkMode ?
    <Container>
        <Line>
            <Text> 
                <Number> 404 | </Number> 
                This page could not be found 
            </Text> 
        </Line>
    </Container>
    : 
    <ContainerLight>
        <Line>
            <TextLight> 
                <NumberLight> 404 | </NumberLight> 
                This page could not be found 
            </TextLight> 
        </Line>
    </ContainerLight>
    } 
    </>
  )
}

const Container = styled.div`
    background: #141625;
    height: 100vh;
`
const Line = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
`
const Number = styled.p`
    font-size: 45px;
    margin-top: -4%;
`
const Text = styled.div`
    margin-top: 18%;
    display: flex;
    gap: 20px;
    flex-direction: row;
    color:white;
    font-size: 28px;
`
const ContainerLight = styled.div`
background: white;
height: 100vh;
`
const NumberLight = styled.p`
    font-size: 45px;
    margin-top: -4%;
    color: black;
`
const TextLight = styled.div`
    margin-top: 18%;
    display: flex;
    gap: 20px;
    flex-direction: row;
    font-size: 28px;
    color: black;
`


export default Error