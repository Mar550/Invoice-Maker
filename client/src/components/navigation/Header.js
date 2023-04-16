import React, { useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
// UI Icons
import { MdLightMode } from 'react-icons/md';
import { MdModeNight } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { tablet } from '../../responsive';

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
            <Icon>
              <Page title="View on Github " target="_blank" href="https://github.com/Mar550/Invoice-Maker">
                <GoMarkGithub style={{color:"white", marginTop:"1rem"}}/>
              </Page>
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
  font-size: 38px;
  &:hover{
    cursor: pointer;
  }
  border-left: 2px solid #494e6e;
  display:flex;
  justify-content:center;
  width: 7rem;
  ${tablet({ width:"5rem"})}
`

const Page = styled.a`
&:hover{
  cursor: pointer;
  opacity: 1;
}
`

export default Header;

