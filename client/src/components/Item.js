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

const Input2 = styled.input`
    width: 40%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white; 
`
const Row2 = styled.div`
    color: white;
    display:inline-flex;
    justify-content: space-between;
    gap: 0.8rem;
`
const Space = styled.div`
`

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
            <Label> Qty. </Label>
            <Input2
            type="number"
            name="quantity"
            value={data.items.quantity}  
            onChange={handleItemChange}
            />
        </Group>
        <Group>
            <Label> Price </Label>
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
            <Space> <FaTrashAlt onClick={removeItem} style={{cursor:"pointer"}}/> </Space>
        </Group>
    </Row2>
    </>

  )
}

export default Item;