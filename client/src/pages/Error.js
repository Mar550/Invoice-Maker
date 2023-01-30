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
        <Image src={error}/>
    </Container>
    : 
    <ContainerLight>
        <Image src={error}/>
    </ContainerLight>
    } 
    </>
  )
}

const Container = styled.div`
    background: #141625;
    height: 35rem;
    padding: 4rem;
`
const Image = styled.img`
    width: 45%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const ContainerLight = styled.div`
    background: white;
    height: 35rem;
    padding: 4rem;
`


export default Error