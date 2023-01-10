import React from 'react'
import styled from 'styled-components'
import logo from '../assets/B.png';
import { Link } from 'react-router-dom';
const Container = styled.div`
    display:flex;
    gap: 26%;
    padding: 0.9rem;
    width: 100%;
`
const Logo = styled.div`
    display:flex;
    gap: 0.5rem;
    margin-left: 1.5rem;
`
const Image = styled.img`
    width: 3rem;
    height: 3rem;
`
const Title = styled.h1`
    margin-top: 0.4rem;
    font-size: 30px;
    font-weight: 1000;
`
const Links = styled.div`
    display: flex;
    gap: 30%;
`
const Linked = styled.p`
    margin-top: 0.8rem;
    color: #2d2d2d;
    font-weight: 600;
    font-size: 17px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const Auth = styled.div`
    display: flex;
    gap: 1rem;
`

const Button = styled.div`
    text-decoration: none;
    margin-top: 0.3rem;
    width: 7rem;
    text-align:center;
    padding: 0.6rem;
    color: white;
    background-color: #6415FF;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
`

const Button2 = styled.div`
    text-decoration: none;
    color: black;
    margin-top: 0.3rem;
    width: 7rem;
    text-align:center;
    padding: 0.6rem;
    background-color: white;
    border: 2px solid #6415FF;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Logo>
        <Image src={logo} />
        <Title>
            BILING
        </Title>
        </Logo>
        <Links> 
        <Linked>
            About
        </Linked>
        <Linked>
            Blog
        </Linked>
        <Linked>
            Pricing
        </Linked>
        <Linked>
            Contact 
        </Linked>
        </Links>
        <Auth>
            <Link to='/login' style={{ textDecoration: 'none' }}>
                <Button2>
                    Login
                </Button2>
            </Link>
            <Link to='/register' style={{ textDecoration: 'none' }}>
                <Button>
                    Signup
                </Button>
            </Link>
        </Auth>
    </Container>
  )
}

export default Navbar