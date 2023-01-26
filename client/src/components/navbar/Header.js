import React, {useState} from 'react';
import styled from 'styled-components';

// UI Icons
import {MdLightMode} from 'react-icons/md';
import {MdModeNight} from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';


const Header = ({mode, setMode}) => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
        <Container>
            <Home>
                <AiFillHome/>
            </Home>
            { mode ? 
            <ModeDark onClick={() => setMode(!mode)} >      
                <MdLightMode />
            </ModeDark>
            :
            <ModeLight onClick={() => setMode(!mode)} >      
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
  height: 4.5rem;
  color: white;
`
const Home = styled.div`
  background-color: #7c5dfa;
  padding-left: 1rem;
  padding-top: 0.5rem;
  font-size: 35px;
  width: 4.3rem;
  height: 4.5rem;
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
  margin-top: 0.7rem;
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
  margin-top: 0.7rem;
  color:white;
  opacity: 0.6;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
`

export default Header;

