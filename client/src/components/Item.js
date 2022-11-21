import React from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';

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
    color: white;
`
const Label = styled.label`
    font-size: 15px;`

const Label2 = styled.label`
    font-size: 15px;
    margin-left: 1rem;`

const Input2 = styled.input`
    width: 60%;
    margin-left: 1rem;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white; 
    font-size: 18px;
`
const Input3 = styled.input`

`
const Row2 = styled.div`
    color: white;
    display:inline-flex;
    justify-content: space-between;
`
const Space = styled.div`
    width: 60%;
    height: 3rem;
    padding: 0.5rem;
    font-size: 20px;
`
const Line = styled.br``

const Item = ({ removeItem, data, handleItemChange }) => {

    
    return (
    <>
    <Row2>
        <Group>
            <Label> Item Name </Label>
            <Input
            name="name"
            value={data.items.name}  
            onChange={handleItemChange}         
            />
        </Group>
        <Group>
            <Label2> Qty. </Label2>
            <Input2
            type="number"
            name="quantity"
            value={data.items.quantity}  
            onChange={handleItemChange}
            />
        </Group>
        <Group>
            <Label2> Price </Label2>
            <Input2 
            type="number"
            name="price"
            value={data.items.price}  
            onChange={handleItemChange}
            />
        </Group>
        <Group>
            <Label> Total </Label>
            <Space> 0.00 </Space>
        </Group>
        <Group >
            <Line/>
            <Space> <FaTrashAlt onClick={removeItem} style={{cursor:"pointer"}}/> </Space>
        </Group>
    </Row2>
    </>

  )
}

export default Item;