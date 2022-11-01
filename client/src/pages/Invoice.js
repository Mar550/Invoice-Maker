import React from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';

const Wrapper = styled.div`
width: 100%;
background-color: rgba(0,0,0, 0.5);
height: 100%;
padding-top: 3rem;
padding-bottom: 3rem;
`


const Container = styled.div`
border-radius: 10px;
background-color:#141625;
width: 50%;
color: white;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
gap: 1rem;
padding: 4%;
`

const Title = styled.h1`
font-weight:bold;
font-size: 1.7rem;
`
const Title2 = styled.h3`
font-weight:bold;
font-size: 1.3rem;
margin-top: 4rem;`

const Subtitle = styled.h4`
margin-top: 1.2rem;
font-weight: bold;
font-size: 1rem;
color: #7c5dfa;
`

const Group = styled.div`
display: flex;
flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
`

const Input2 = styled.input`
    width: 40%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem; 
`

const Date = styled.input`
    width: 90%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
`

const Row = styled.div`
color: white;
display:inline-flex;
`

const Row2 = styled.div`
color: white;
display:inline-flex;
justify-content: space-between;
gap: 2rem;
`

const Label = styled.label``

const Button = styled.button`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #1e2139;
    height: 3rem;
    padding: 0 1.5rem;
    border-radius: 1.5rem;
    border: none;
    width: 100%;
    white-space: nowrap;
    font-size: .9rem;
    line-height: .9375rem;
    letter-spacing: -.25px;
    font-weight: 700;
`

const Action = styled.button`
    width: 28%;
    height: 3rem;
    padding: 0 1.5rem;
    border-radius: 1.5rem;
    border: none;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    white-space: nowrap;
    font-size: .9rem;
    line-height: .9375rem;
    letter-spacing: -.25px;
    font-weight: 700;
    color: white;
`

const Space = styled.div``

const Footer = styled.div`
    padding: 2.5rem 2rem ;
    height: 6rem;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    gap: 2%;
`

const Invoice = () => {
  return (
    <> 
        <Wrapper> 
        <Container>
            <Title> New Invoice </Title>
            <Subtitle> Bill From </Subtitle>
            <Group>
                <Label> Street Adress </Label>
                <Input />
            </Group>
            <Row>
                <Group>
                    <Label> Country </Label>
                    <Input />
                </Group>
                <Group>
                    <Label> City </Label>
                    <Input />
                </Group>
            </Row>
            <Group>
                <Label> Post Code </Label>
                <Input />
            </Group>
            <Subtitle> Bill To </Subtitle>
            <Group>
                <Label> Client's Name </Label>
                <Input />
            </Group>
            <Group>
                <Label> Client's Email </Label>
                <Input />
            </Group>
            <Group>
                <Label> Street Address </Label>
                <Input />
            </Group>
            <Row>
                <Group>
                    <Label> Country </Label>
                    <Input />
                </Group>
                <Group>
                    <Label> City </Label>
                    <Input />
                </Group>
            </Row>
            <Group>
                <Label> Post Code </Label>
                <Input />
            </Group>
            <Group>
               <Label> Invoice Date </Label>
                <Date type="date"/>
            </Group> 
            <Group>
               <Label> Payment Terms </Label>
                <Date type="date"/>
            </Group>
            <Group>
                <Label> Project Description </Label>
                <Input />
            </Group>
            <Title2> Item List (1) </Title2>
            <Group>
                <Label> Item Name </Label>
                <Input />
            </Group>
            <Row2>
                <Group>
                    <Label> Qty. </Label>
                    <Input2 />
                </Group>
                <Group>
                    <Label> Price </Label>
                    <Input2 />
                </Group>
                <Group>
                    <Label> Total </Label>
                    <Space> 0.00 </Space>
                </Group>
                <Group>
                    <Space> <FaTrashAlt/> </Space>
                </Group>
            </Row2>
            <Button> + Add New Item </Button>
            <Footer>
                <Action style={{backgroundColor:"#252945"}}> Discard </Action>
                <Action style={{backgroundColor:"#373b53"}}> Save as Draft </Action>
                <Action style={{backgroundColor:"#7c5dfa"}}> Save & Send </Action>      
            </Footer>
        </Container>
        
        </Wrapper>
    </>
  )
}

export default Invoice