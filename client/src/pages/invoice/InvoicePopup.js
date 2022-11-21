import React, {useState} from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';
import axios from 'axios';
import Item from '../../components/Item';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.8);
    transition: bottom 0.3s ease-out;
`
const Container = styled.div`
    position:relative;
    overflow:auto;
    height:100%;
    border-radius: 10px;
    background-color:#141625;
    width: 50%;
    color: white;
    transform: translateX(0%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4%;
`
const Title = styled.h1`
    font-weight:bold;
    font-size: 1.7rem;
    margin-top: 1rem;
`
const Title2 = styled.h3`
    font-weight:bold;
    font-size: 1.3rem;
    margin-top: 4rem;
`
const Subtitle = styled.h4`
    margin-top: 1.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #7c5dfa;
`
const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
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
const Input2 = styled.input`
    width: 40%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white; 
`
const Date = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white;
`
const Row = styled.div`
    color: white;
    display:inline-flex;
    gap: 2rem;

`
const Row2 = styled.div`
    color: white;
    display:inline-flex;
    justify-content: space-between;
`
const Label = styled.label`
    font-size: 15px;
`
const Button = styled.button`
    margin-top: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    color: #fff;
    background: #1e2139;
    font-weight: bold;
    height: 4rem;
    border: none;
    width: 100%;
    border-radius: 1rem;
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
const Space = styled.div`
`
const Footer = styled.div`
    padding: 2.5rem 2rem ;
    height: 6rem;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    gap: 2%;
`

const Line = styled.br``


const InvoicePopup = (props) => {

    const [data, setData] = useState({
        address: "",
        country: "",
        city: "",
        postcode: "",
        client_name: "",
        client_email: "",
        client_address: "",
        client_country: "",
        client_city: "",
        client_code: "",
        date:"",
        term:"",
        description:"",
        items: {name:"",quantity:"",price:""}
    })

    const [trigger, setTrigger] = useState(false)

    const createInvoice = async () => {
        await axios.post('http://localhost:5000/api/invoice/create',data)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]:input.value })
    }

    const handleItemChange = ({ currentTarget: input }) => {
        setData({ 
            ...data,
            items: {
                ...data.items,
                [input.name]:input.value
            }
        });    
    }

    const [itemsToAdd, setItemsToAdd] = useState(1);

    const addItem = (e) => {
        e.preventDefault();
        setItemsToAdd(itemsToAdd + 1)
    }

    const removeItem = () => {
        if ( itemsToAdd > 1) {
            setItemsToAdd(itemsToAdd - 1)
        } 
    }
    
    const closePopup = () => {
        props.setTrigger(false);
    }

    console.log(data)

    return (props.trigger) ? (
        <> 
        <Wrapper >
        <Container>
            <div onClick={closePopup} style={{marginTop:"-1rem", cursor:"pointer"}}>
                <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem"}}/> <Label > Go Back </Label> 
            </div>
            <Title> New Invoice </Title>
            <Subtitle> Bill From </Subtitle>
            <form> 
            <Group>
                <Label> Street Adress </Label>
                <Input
                name="address"
                value={data.address}  
                onChange={handleChange}
                />
            </Group>
            <Row>
                <Group>
                    <Label> Country </Label>
                    <Input 
                    name="country"
                    value={data.country}  
                    onChange={handleChange}
                    />
                </Group>
                <Group>
                    <Label> City </Label>
                    <Input
                    name="city"
                    value={data.city}  
                    onChange={handleChange}
                    />
                </Group>
            </Row>
            <Group>
                <Label> Post Code </Label>
                <Input
                name="postcode"
                value={data.postcode}  
                onChange={handleChange}
                />
            </Group>
            <Line/>
            <Subtitle> Bill To </Subtitle>
            <Group style={{marginTop:"2rem"}}>
                <Label> Client's Name </Label>
                <Input
                name="client_name"
                value={data.client_name}  
                onChange={handleChange}
                />
            </Group>
            <Group>
                <Label> Client's Email </Label>
                <Input
                name="client_email"
                value={data.client_email}  
                onChange={handleChange}
                />
            </Group>
            <Group>
                <Label> Street Address </Label>
                <Input
                name="client_address"
                value={data.client_address}  
                onChange={handleChange}
                />
            </Group>
            <Row>
                <Group>
                    <Label> Country </Label>
                    <Input
                    name="client_country"
                    value={data.client_country}  
                    onChange={handleChange}
                    />
                </Group>
                <Group>
                    <Label> City </Label>
                    <Input
                    name="client_city"
                    value={data.client_city}  
                    onChange={handleChange}
                    />
                </Group>
            </Row>
            <Group>
                <Label> Post Code </Label>
                <Input
                name="client_code"
                value={data.client_code}  
                onChange={handleChange}
                />
            </Group>
            <Group>
               <Label> Invoice Date </Label>
                <Date 
                type="date"
                name="date"
                value={data.date}  
                onChange={handleChange}
                />
            </Group> 
            <Group>
               <Label> Payment Terms </Label>
                <Date 
                type="date"
                name="term"
                value={data.term}  
                onChange={handleChange}
                />
            </Group>
            <Group>
                <Label> Description </Label>
                <Input 
                name="description"
                value={data.description}  
                onChange={handleChange}
                />
            </Group>
            <Title2> Item List </Title2>
            
            {[...Array(itemsToAdd),].map((value, index) => (
                <Item 
                id={index} 
                key={index} 
                data={data}
                handleItemChange={handleItemChange}
                removeItem={removeItem}
                />
                ))
            }

            <Button onClick={addItem}> + Add New Item </Button>
            <Footer>
                <Action onClick={closePopup} style={{backgroundColor:"#252945"}} > Discard </Action>
                <Action style={{backgroundColor:"#373b53"}}> Save as Draft </Action>
                <Action onClick={createInvoice} style={{backgroundColor:"#7c5dfa"}}> Save & Send </Action>      
            </Footer>
            </form>
        </Container>  
        </Wrapper>
        </>
    ) : "";
}

export default InvoicePopup;