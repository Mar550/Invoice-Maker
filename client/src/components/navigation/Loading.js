import React, {useContext} from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../App';
import Header from './Header';

const Loading = () => {
    
    const { darkMode } = useContext(ThemeContext)
    return (
      <>
        <Header/>
        { darkMode ? 
        <ContainerDark>
            <TextDark> Loading... </TextDark>
        </ContainerDark>
        :
        <ContainerLight>
            <TextLight> Loading... </TextLight>
        </ContainerLight>
        }       
      </>
  )
}

const ContainerDark = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    color: white; 
    background-color: #141625; 
`

const ContainerLight = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    color: black; 
    background-color: #f8f8fb; 
`

const TextDark= styled.p`
    color: white;
    font-size: 1.8rem;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 2px;
    margin-top: 18%;
`

const TextLight = styled.p`
    color: black;
    font-size: 1.8rem;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 2px;
    margin-top: 18%;
`

export default Loading;