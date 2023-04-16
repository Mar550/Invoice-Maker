import React, {useContext} from 'react'
import styled from 'styled-components'
import Header from '../components/navigation/Header'
import error from '../assets/404.svg'
import { ThemeContext } from '../App';

import {tablet} from "../responsive";

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
    position:absolute; 
height:100%; 
width:100%; 

`
const Line = styled.div`
    width:  100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

`
const Number = styled.p`
    font-size: 45px;
    margin-top: -1rem;
    ${tablet({ fontSize: "30px",marginTop:"-0.7rem" })}
`
const Text = styled.div`
    margin-top: 19%;
    display: flex;
    gap: 20px;
    flex-direction: row;
    color:white;
    font-size: 28px;
    ${tablet({ fontSize: "20px", marginTop:"40%" })}
`
const ContainerLight = styled.div`
background: white;
height: 100vh;
`
const NumberLight = styled.p`
    font-size: 45px;
    margin-top: -1rem;
    color: black;
    ${tablet({ fontSize: "30px", marginTop:"-0.7rem" })}

`
const TextLight = styled.div`
    margin-top: 19%;
    display: flex;
    gap: 20px;
    flex-direction: row;
    font-size: 28px;
    color: black;
    ${tablet({ fontSize: "20px", marginTop:"40%" })}
`


export default Error