import React,{useState, useContext} from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tablet } from '../../responsive';
import { logout } from '../../features/authSlice';
import { Link } from 'react-router-dom';
//Icons
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';


const Dropdown = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toDashboard = () => {
        navigate('/home')
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/')
      }

    return (
    <>  
        <Wrapper>
            <Container>
            <Ul>
                <Li onClick={toDashboard}> 
                    <MdOutlineSpaceDashboard style={{fontSize:"1.6rem"}}/>
                    <A> Dashboard </A>
                </Li>
                <Li> 
                    <AiFillGithub style={{fontSize:"1.6rem"}}/>
                    <A  href="https://github.com/Mar550/Invoice-Maker" target="_blank" style={{textDecoration:"none"}}> View on Github </A>
                </Li>
                <Li onClick={(e)=>handleLogout(e)}> 
                    <BiLogOut style={{fontSize:"1.6rem"}}/>
                    <A> Logout </A>
                </Li>
            </Ul>
            </Container>
        </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
    & {
        opacity: 1;
        position: absolute;
        top: 100px;
        right: 16px;
        background-color: #252945;
        border-radius: 12px;
        width: 200px;
        color: white;
        z-index: 1000;
    }
    &:before {
        content: '';
        position: absolute;
        top: -5px;
        right: 20px;
        height: 15px;
        width: 20px;
        background: #252945;
        transform: rotate(45deg);
    }
    
`

const Container = styled.div`
    margin-top: 1rem;
`


const Title = styled.h3`
width: 100%;
text-align: center;
font-size: 1.5rem;
padding: 15px 0;
font-weight: 500;
font-size: 18px;
color: white;
line-height: 1.2rem;
`

const Ul = styled.ul`
list-style-type: none;
text-decoration: none;

`

const Li = styled.li`
text-decoration: none;
color: white;
font-size: 1rem;
padding: 10px 0px;
    &:hover{
        color: #7c5dfa;
        cursor: pointer;
    }

`

const Img = styled.img`
opacity: 1;
cursor: pointer;
`

const A = styled.a`
max-width: 100px;
margin-left: 5px;
transition: var(--speed);
text-decoration: none;
color:white;
&:hover{
    color: #7c5dfa;
    cursor: pointer;  
}
`



export default Dropdown