import React, {useContext} from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ThemeContext } from '../../App';
import Header from './Header';
import '../../index.css'

const Loading = () => {
    
    const { darkMode } = useContext(ThemeContext)
    return (
      <>
        <Header/>
        { darkMode ? 
        <ContainerDark>
            <div className="spinner-dark"> </div>
        </ContainerDark>
        :
        <ContainerLight>
            <div className="spinner-light"> </div>
        </ContainerLight>
        }       
      </>
  )
}


const ContainerDark = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: white; 
    background-color: #141625; 
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerLight = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: white; 
    background-color: #f8f8fb; 
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default Loading;