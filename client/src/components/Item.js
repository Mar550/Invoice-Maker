import React from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';


const Item = ({ removeItem, data, handleItemChange }) => {

    return (
    <>
        <Row2>
            <Group style={{gridColumn:"1/7"}}>
                <Label> Item Name </Label>
                <Input
                name="name"
                value={data.items.name}  
                onChange={handleItemChange}         
                />
            </Group>
            <Group style={{gridColumn:"7/9"}}>
                <Label2> Qty. </Label2>
                <Input2
                type="number"
                name="quantity"
                value={data.items.quantity}  
                onChange={handleItemChange}
                />
            </Group>
            <Group  style={{gridColumn:"9/11"}}>
                <Label2> Price </Label2>
                <Input2 
                type="number"
                name="price"
                value={data.items.price}  
                onChange={handleItemChange}
                />
            </Group>
            <Group  style={{gridColumn:"11/13"}}>
                <Label> Total </Label>
                <Space> {data.items.price && data.items.quantity ? data.items.quantity * data.items.price : '0.00' } </Space>
            </Group>
            <Group style={{gridColumn:"13/14",paddingTop:"1.5rem"}} >
                <Space > <FaTrashAlt  onClick={removeItem} style={{cursor:"pointer"}}/> </Space>
            </Group>
        </Row2>
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
    border: 1px solid #252945; // Grey
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: white; // Black
    font-size: 15px;
`
const Label = styled.label`
    font-size: 15px; // Grey
`
const Label2 = styled.label`
    font-size: 15px; // Grey
    margin-left: 1rem;
`
const Input2 = styled.input`
    width: 80%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: white; 
    font-size: 18px;
    margin-left: 1rem;
    font-size: 15px;
`
const Input3 = styled.input`

`
const Row2 = styled.div`
    display:grid;
    grid-template-columns: repeat(14,1fr) ;
    gap: 0.5rem;
`
const Space = styled.div`
    width: 60%;
    height: 3rem;
    padding: 0.5rem;
    font-size: 20px;
    left: 0.3rem;
    // color:#7c5dfa;
`
const Line = styled.br``

export default Item;