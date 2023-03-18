import React, { useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
// UI Icons
import {MdLightMode} from 'react-icons/md';
import {MdModeNight} from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';


const Header = (props) => {

  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
        <Container>
            <Home>
              <Link style={{textDecoration:"none", color:"white", backgroundColor: "#7c5dfa"}} to="/invoices">
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
        </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #252945; 
  width: 100%;
  height: 5rem;
  color: white;
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
`
const ModeDark = styled.div`
  color: white;
  border:none;
  float:right;
  font-size: 25px;
  margin-right: 10%;
  margin-top: 1rem;
  color:white;
  opacity: 0.6;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`

const ModeLight = styled.div`
  border:none;
  float:right;
  font-size: 25px;
  margin-right: 10%;
  margin-top: 1rem;
  color:white;
  opacity: 0.6;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`

export default Header;

