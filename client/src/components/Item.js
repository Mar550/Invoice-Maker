import React, {useContext} from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';
import Label from './fields/Label';
import { ThemeContext } from '../App';


const Item = ({ removeItem, data, handleItemChange }) => {

    const { darkMode } = useContext(ThemeContext)

    return (
    <>
    {
        darkMode ?
        <Row>
        <Group style={{gridColumn:"1/7"}}>
        <Label title="Item Name"/> 
            <Input
            name="name"
            value={data.items.name}  
            onChange={handleItemChange}         
            />
        </Group>
        <Group style={{gridColumn:"7/9"}}>
        <Label title="Qty." style={{marginLeft:"1rem"}} /> 
            <Input2
            type="number"
            name="quantity"
            value={data.items.quantity}  
            onChange={handleItemChange}
            />
        </Group>
        <Group  style={{gridColumn:"9/11"}}>
        <Label title="Price" style={{marginLeft:"1rem"}} /> 
            <Input2 
            type="number"
            name="price"
            value={data.items.price}  
            onChange={handleItemChange}
            />
        </Group>
        <Group  style={{gridColumn:"11/13"}}>
        <Label title="Total"/> 
            <Space> {data.items.price && data.items.quantity ? data.items.quantity * data.items.price : '0.00' } </Space>
        </Group>
        <Group style={{gridColumn:"13/14",paddingTop:"1.5rem"}} >
            <Space > <FaTrashAlt  onClick={removeItem} style={{cursor:"pointer"}}/> </Space>
        </Group>
    </Row>
        :
        <Row>
        <Group style={{gridColumn:"1/7"}}>
        <Label title="Item Name"/> 
            <InputLight
            name="name"
            value={data.items.name}  
            onChange={handleItemChange}         
            />
        </Group>
        <Group style={{gridColumn:"7/9"}}>
        <Label title="Qty." style={{marginLeft:"1rem"}} /> 
            <Input2Light
            type="number"
            name="quantity"
            value={data.items.quantity}  
            onChange={handleItemChange}
            />
        </Group>
        <Group  style={{gridColumn:"9/11"}}>
        <Label title="Price" style={{marginLeft:"1rem"}} /> 
            <Input2Light 
            type="number"
            name="price"
            value={data.items.price}  
            onChange={handleItemChange}
            />
        </Group>
        <Group  style={{gridColumn:"11/13"}}>
        <Label title="Total"/> 
            <SpaceLight> {data.items.price && data.items.quantity ? data.items.quantity * data.items.price : '0.00' } </SpaceLight>
        </Group>
        <Group style={{gridColumn:"13/14",paddingTop:"1.5rem"}} >
            <Space > <FaTrashAlt  onClick={removeItem} style={{cursor:"pointer", color:"#7e88c3"}}/> </Space>
        </Group>
    </Row>

    }
        
    </>

  )
}

const Group = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945; 
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: white; 
    font-size: 14px;
`
const Input2 = styled.input`
    width: 80%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: white; 
    margin-left: 0.4rem;
    font-size: 14px;
`
const InputLight = styled.input`
    width: 100%;
    background-color: white;
    border: 1px solid #dfe3fa; 
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: black;
    font-size: 14px;
`
const Input2Light = styled.input`
    width: 80%;
    background-color: white;
    border: 1px solid #dfe3fa;
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: black; 
    margin-left: 1rem;
    font-size: 14px;
`

const Row = styled.div`
    display:grid;
    grid-template-columns: repeat(14,1fr) ;
    gap: 0.5rem;
`
const Space = styled.div`
    width: 60%;
    height: 3rem;
    padding: 0.5rem;
    font-size: 20px;
`

const SpaceLight = styled.div`
    width: 80%;
    height: 3rem;
    border: 1px solid #dfe3fa; 
    font-size: 15px;
    left: 0.3rem;
    color:#7c5dfa;
    border-radius: 0.25rem;
    padding: 0.65rem;
    margin-left: 1rem;
`


export default Item;