import React, {useState, useEffect, useContext} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';
import axios from 'axios';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import Label from '../../components/fields/Label';
import { ThemeContext } from '../../App';
import { publicRequest } from '../../request';

const Edit = (props) => {

    const { darkMode } = useContext(ThemeContext)

    // Handle Location Id
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    // Handle Form Data
    const [itemsList, setItemsList] = useState([{        
        id: crypto.randomUUID(),
        name: "",
        quantity: "",
        price: ""
    }]);

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
        items: itemsList,
        status:"Pending"
    })

    // Get Invoice with ID
    const getInvoice = async () => {
        await publicRequest.get(`/invoice/edit/` + id)
        .then(res => {
        const result = res.data
        setData(result)
      })};
    
    useEffect(() => {
        getInvoice()
    },[])

    // Update Function
    const updateInvoice = async (e) => {
        e.preventDefault()
        await publicRequest.put('/invoice/update/' + id, data)
        .then(response => response.status == 200 ? window.location.replace('/invoice/'+id) : console.log(response))
        .catch(error => console.log(error))
    }

    // Update as a draft Function
    const updateDraft = async (e) => {
        e.preventDefault()
        setData((data) => {
            return({
                ...data,
                status:'Draft'
            });
        });
        await publicRequest.put('/invoice/update/'+id, data)
        .then(response => response.status == 200 ? window.location.replace('/invoice/'+id) : console.log(response))
        .catch(error => console.log(error))
    }
    
    
    // Handle Input
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]:input.value })
    }
    const handleChangeItemsList = (e, index) => {
        const {name, value} = e.target;
        const list = [...itemsList]
        list[index][name] = value;
        setItemsList(list)
        setData({...data, items: list})
    }

    // Handle Items in Form
    const [itemsToAdd, setItemsToAdd] = useState(1);
    
    const addItem = (e) => {
        e.preventDefault();
        setItemsToAdd(itemsToAdd + 1)
        setItemsList([...itemsList, {
            id: crypto.randomUUID(),
            name: "",
            quantity: "",
            price: ""
        }]) 
        setData({...data, items: [...itemsList,{
            id: crypto.randomUUID(),
            name: "",
            quantity: "",
            price: ""
        } ]})
    }

    const removeItem = (id) => {
        if ( itemsToAdd > 1) {
            setItemsToAdd(itemsToAdd - 1)
            const filteredItemList = itemsList.filter( element => element.id != id)
            setItemsList(filteredItemList)
            setData({...data, items: filteredItemList})
        } 
    }

    // Handle Popup
    const [trigger, setTrigger] = useState(false)
    const closePopup = () => {
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <> 
        { darkMode ? 
    <Wrapper >
    <Container>
        <div onClick={closePopup} style={{marginTop:"-1rem", cursor:"pointer"}}>
            <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem"}}/> <Label > Go Back </Label> 
        </div>
        <Title> Edit Invoice </Title>
        <Subtitle> Bill From </Subtitle>
        <form> 
        <Group>
        <Label title="Street Address"/> 
            <Input
            name="address"
            value={data.address}  
            onChange={handleChange}
            />
        </Group>
        <Row>
            <Group>
                <Label title="Country"/> 
                <Input 
                name="country"
                defaultValue={data.country}  
                onChange={handleChange}
                />
            </Group>
            <Group>
                <Label title="City"/> 
                <Input
                name="city"
                value={data.city}  
                onChange={handleChange}
                />
            </Group>
        </Row>
        <Group>
            <Label title="Post Code"/>
            <Input
            name="postcode"
            value={data.postcode}  
            onChange={handleChange}
            />
        </Group>
        <Line/>
        <Subtitle> Bill To </Subtitle>
        <Group style={{marginTop:"2rem"}}>
            <Label title="Client's Name"/>
            <Input
            name="client_name"
            value={data.client_name}  
            onChange={handleChange}
            />
        </Group>
        <Group>
            <Label title="Client's Email"/>
            <Input
            name="client_email"
            value={data.client_email}  
            onChange={handleChange}
            />
        </Group>
        <Group>
            <Label title="Street Address"/>
            <Input
            name="client_address"
            value={data.client_address}  
            onChange={handleChange}
            />
        </Group>
        <Row>
            <Group>
                <Label title="Country"/>
                <Input
                name="client_country"
                value={data.client_country}  
                onChange={handleChange}
                />
            </Group>
            <Group>
                <Label title="City"/>
                <Input
                name="client_city"
                value={data.client_city}  
                onChange={handleChange}
                />
            </Group>
        </Row>
        <Group>
            <Label title="Post Code"/>
            <Input
            name="client_code"
            value={data.client_code}  
            onChange={handleChange}
            />
        </Group>
        <Group>
            <Label title="Invoice Date"/>
            <Date 
            type="date"
            name="date"
            value={data.date}  
            onChange={handleChange}
            />
        </Group> 
        <Group>
            <Label title="Payment Term"/>
            <Date 
            type="date"
            name="term"
            value={data.term}  
            onChange={handleChange}
            />
        </Group>
        <Group>
            <Label title="Description"/>
            <Input 
            name="description"
            value={data.description}  
            onChange={handleChange}
            />
        </Group>
        <Title2> Item List </Title2>
        
        {
                itemsList.length > 0 ?
                itemsList.map((ite,index) => {
                    return (
                        <RowItem key={ite.id}>
                        <GroupItem style={{gridColumn:"1/7"}}>
                        <Label title="Item Name"/> 
                            <InputItem
                            id={ite.id}
                            name="name"
                            onChange = {(e) => handleChangeItemsList(e,index)}                              
                            />
                        </GroupItem>
                        <GroupItem style={{gridColumn:"7/9"}}>
                        <Label title="Qty." style={{marginLeft:"1rem"}} /> 
                            <InputItem2
                            type="number"
                            name="quantity"
                            onChange = {(e) => handleChangeItemsList(e,index)}                              
                            />
                        </GroupItem>
                        <GroupItem  style={{gridColumn:"9/11"}}>
                        <Label title="Price" style={{marginLeft:"1rem"}} /> 
                            <InputItem2
                            type="number"
                            name="price"
                            onChange = {(e) => handleChangeItemsList(e,index)}                                />
                        </GroupItem>
                        <GroupItem  style={{gridColumn:"11/13"}}>
                        <Label title="Total"/> 
                            <Space> {ite.price && ite.quantity ? ite.quantity * ite.price : '0.00' } </Space>
                        </GroupItem>
                        <GroupItem style={{gridColumn:"13/14",paddingTop:"1.5rem"}} >
                            <Space > <FaTrashAlt  onClick={() => removeItem(ite.id)} style={{cursor:"pointer"}}/> </Space>
                        </GroupItem>
                </RowItem>
                )
            })
            : null
            }

        <Button onClick={addItem}> + Add New Item </Button>
        <Footer>
            <Action onClick={closePopup} style={{backgroundColor:"#252945"}} > Discard </Action>
            <Action onClick= {updateDraft} style={{backgroundColor:"#373b53"}}> Save as Draft </Action>
            <Action onClick={updateInvoice} style={{backgroundColor:"#7c5dfa"}}> Save & Send </Action>      
        </Footer>
        </form>
    </Container>  
    </Wrapper>
            :
            <Wrapper >
            <ContainerLight>
                <div onClick={closePopup} style={{marginTop:"-1rem", cursor:"pointer"}}>
                    <MdOutlineArrowBackIosNew style={{color:"#7c5dfa",fontSize:"1.5rem"}}/> <Label > Go Back </Label> 
                </div>
                <TitleLight> Edit Invoice </TitleLight>
                <Subtitle> Bill From </Subtitle>
                <form> 
                <Group>
                    <Label title="Street Address"/>
                    <InputLight
                    name="address"
                    value={data.address}  
                    onChange={handleChange}
                    />
                </Group>
                <Row>
                    <Group>
                        <Label title="Country"/>
                        <InputLight 
                        name="country"
                        defaultValue={data.country}  
                        onChange={handleChange}
                        />
                    </Group>
                    <Group>
                        <Label title="City"/>
                        <InputLight
                        name="city"
                        value={data.city}  
                        onChange={handleChange}
                        />
                    </Group>
                </Row>
                <Group>
                    <Label title="Post Code"/>
                    <InputLight
                    name="postcode"
                    value={data.postcode}  
                    onChange={handleChange}
                    />
                </Group>
                <Line/>
                <Subtitle> Bill To </Subtitle>
                <Group style={{marginTop:"2rem"}}>
                    <Label title="Client's Name"/>
                    <InputLight
                    name="client_name"
                    value={data.client_name}  
                    onChange={handleChange}
                    />
                </Group>
                <Group>
                    <Label title="Client's Email"/>
                    <InputLight
                    name="client_email"
                    value={data.client_email}  
                    onChange={handleChange}
                    />
                </Group>
                <Group>
                    <Label title="Street Address"/>
                    <InputLight
                    name="client_address"
                    value={data.client_address}  
                    onChange={handleChange}
                    />
                </Group>
                <Row>
                    <Group>
                        <Label title="Country"/>
                        <InputLight
                        name="client_country"
                        value={data.client_country}  
                        onChange={handleChange}
                        />
                    </Group>
                    <Group>
                        <Label title="City"/>
                        <InputLight
                        name="client_city"
                        value={data.client_city}  
                        onChange={handleChange}
                        />
                    </Group>
                </Row>
                <Group>
                    <Label title="Post Code"/>
                    <InputLight
                    name="client_code"
                    value={data.client_code}  
                    onChange={handleChange}
                    />
                </Group>
                <Group>
                    <Label title="Invoice Date"/>
                    <InputLight 
                    type="date"
                    name="date"
                    value={data.date}  
                    onChange={handleChange}
                    />
                </Group> 
                <Group>
                    <Label title="Payment Term"/>
                    <InputLight 
                    type="date"
                    name="term"
                    value={data.term}  
                    onChange={handleChange}
                    />
                </Group>
                <Group>
                    <Label title="Description"/>
                    <InputLight 
                    name="description"
                    value={data.description}  
                    onChange={handleChange}
                    />
                </Group>
                <Title2Light> Item List </Title2Light>
                
                {
                itemsList.length > 0 ?
                itemsList.map((ite,index) => {
                    return (
                        <RowItem key={ite.id}>
                        <GroupItem style={{gridColumn:"1/7"}}>
                        <Label title="Item Name"/> 
                            <InputItemLight
                            id={ite.id}
                            name="name"
                            onChange = {(e) => handleChangeItemsList(e,index)}                              
                            />
                        </GroupItem>
                        <GroupItem style={{gridColumn:"7/9"}}>
                        <Label title="Qty." style={{marginLeft:"1rem"}} /> 
                            <InputItemLight2
                            type="number"
                            name="quantity"
                            onChange = {(e) => handleChangeItemsList(e,index)}                              
                            />
                        </GroupItem>
                        <GroupItem  style={{gridColumn:"9/11"}}>
                        <Label title="Price" style={{marginLeft:"1rem"}} /> 
                            <InputItemLight2
                            type="number"
                            name="price"
                            onChange = {(e) => handleChangeItemsList(e,index)}                                />
                        </GroupItem>
                        <GroupItem  style={{gridColumn:"11/13"}}>
                        <Label title="Total"/> 
                            <SpaceLight> {ite.price && ite.quantity ? ite.quantity * ite.price : '0.00' } </SpaceLight>
                        </GroupItem>
                        <GroupItem style={{gridColumn:"13/14",paddingTop:"1.5rem"}} >
                            <SpaceLight > <FaTrashAlt  onClick={() => removeItem(ite.id)} style={{cursor:"pointer"}}/> </SpaceLight>
                        </GroupItem>
                </RowItem>
                )
            })
            : null
            }
    
                <ButtonLight onClick={addItem}> + Add New Item </ButtonLight>
                <Footer>
                    <Action onClick={closePopup} style={{backgroundColor:"#252945"}} > Discard </Action>
                    <Action onClick= {updateDraft} style={{backgroundColor:"#373b53"}}> Save as Draft </Action>
                    <Action onClick={updateInvoice} style={{backgroundColor:"#7c5dfa"}}> Save & Send </Action>      
                </Footer>
                </form>
            </ContainerLight>  
            </Wrapper>
        
        } 
        </>
    ) : ""
}

// STYLES

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
const ContainerLight = styled.div`
    position:relative;
    overflow:auto;
    height:100%;
    border-radius: 10px;
    background-color: white;
    width: 50%;
    color: white;
    transform: translateX(0%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4%;
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

const InputLight = styled.input`
    width: 100%;
    background-color: white;
    border: 1px solid #dfe3fa; 
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: black;
    :focus {
    border: 2px solid black;
    }
`

const Close = styled.div`
    margin-top:"-1rem"; 
    &:hover{
    cursor: pointer;
  }
`
const Title = styled.h1`
    font-weight:bold;
    font-size: 1.7rem;
    margin-top: 1rem;
`

const TitleLight = styled.h1`
    font-weight:bold;
    font-size: 1.7rem;
    margin-top: 1rem;
    color: black;
`

const Title2 = styled.h3`
    font-weight:bold;
    font-size: 1.1rem;
    margin-top: 2.5rem;
    // color: #777f98
`
const Title2Light = styled.h3`
    font-weight:bold;
    font-size: 1.3rem;
    margin-top: 2.5rem;
    color: #777f98;
`
const Subtitle = styled.h4`
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1rem;
    color: #7c5dfa;
`
const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
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
const Button = styled.button`
    margin-top: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    color: #fff;
    background: #1e2139; 
    font-weight: bold;
    height: 4rem;
    border: none;
    width: 100%;
    border-radius: 10px;
`
const ButtonLight = styled.button`
    margin-top: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    color: grey;
    background: #f9fafe; 
    font-weight: bold;
    height: 4rem;
    border: none;
    width: 100%;
    border-radius: 10px;
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
const Line = styled.br``

const Footer = styled.div`
    padding: 2.5rem 2rem ;
    height: 6rem;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    gap: 2%;
`

const GroupItem = styled.div`
    display: flex;
    flex-direction: column;
`
const InputItem = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945; 
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: white; 
    font-size: 14px;
`
const InputItem2 = styled.input`
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


const RowItem = styled.div`
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
const InputItemLight = styled.input`
    width: 100%;
    background-color: white;
    border: 1px solid #dfe3fa; 
    height: 3rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    color: black;
    font-size: 14px;
`
const InputItemLight2 = styled.input`
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


export default Edit;