import React, { useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { tablet } from '../../responsive';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/authSlice';

// UI Icons
import { MdLightMode } from 'react-icons/md';
import { MdModeNight } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { ImExit } from 'react-icons/im';

const Header = (props) => {

  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    window.location.replace('/')
  }
  /** 
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  const userId = Object.values(user)[1]
  console.log(userId)
  */

  return (
    <>
      <Container>
          <Home>
            <Link style={{textDecoration:"none", color:"white", backgroundColor: "#7c5dfa"}} to="/">
              <AiFillHome/>
            </Link>
          </Home>
          { darkMode ? 
          <ModeDark onClick={() => handleThemeChange()} >      
              <MdLightMode />
          </ModeDark>
          :
          <ModeLight onClick={() => handleThemeChange()} >      
              <MdModeNight />
          </ModeLight>
          }
          <Icon title="Logout" onClick={(e) => handleLogout(e)}>
            <ImExit title="Logout"  style={{color:"white", marginTop:"25%"}}/>
          </Icon>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #252945; 
  width: 100%;
  height: 5rem;
  color: white;
  display:grid;
`
const Home = styled.div`
  background-color: #7c5dfa;
  padding-left: 1.2rem;
  padding-top: 0.5rem;
  font-size: 35px;
  width: 5rem;
  height: 100%;
  float: left;
  border-radius: 5px;
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 1;
`
const ModeDark = styled.div`
  color: white;
  border:none;
  font-size: 25px;
  margin-top: 1rem;
  color:white;
  opacity: 0.6;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
  grid-column-start: 11;
  grid-column-end: 11;
  justify-self: end;

`
const ModeLight = styled.div`
  border:none;
  float:right;
  font-size: 25px;
  margin-top: 1rem;
  color:white;
  opacity: 0.6;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
  grid-column-start: 11;
  grid-column-end: 11;
  justify-self: end;
`
const Icon = styled.div`
  grid-column-start: 12;
  grid-column-end: 12;
  justify-self: end;
  font-size: 28px;
  opacity: 0.6;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
  border-left: 2px solid #494e6e;
  display:flex;
  justify-content:center;
  width: 6.5rem;

  ${tablet({ width:"5rem"})}
`

const Page = styled.a`
&:hover{
  cursor: pointer;
  opacity: 1;
}
`

const Button = styled.button`
  color: white;
  background: green;
  &:hover{
    cursor: pointer;
    opacity: 0.6;
  }
`

export default Header;

