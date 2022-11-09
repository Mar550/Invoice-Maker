import React, {useState} from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';
import axios from 'axios';


const WrapperX = styled.div`
    width: 100%;
    background-color: rgba(0,0,0, 0.6);
    height: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin: auto;
`

const ContainerX = styled.div`
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

const TitleX = styled.h1`
    font-weight:bold;
    font-size: 1.7rem;
`
const Title2X = styled.h3`
    font-weight:bold;
    font-size: 1.3rem;
    margin-top: 4rem;
`

const SubtitleX = styled.h4`
    margin-top: 1.2rem;
    font-weight: bold;
    font-size: 1rem;
    color: #7c5dfa;
`

const GroupX = styled.div`
    display: flex;
    flex-direction: column;
`

const InputX = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white;
`

const Input2X = styled.input`
    width: 40%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white; 
`

const DateX = styled.input`
    width: 100%;
    background-color: #1e2139;
    border: 1px solid #252945;
    height: 3rem;
    padding: 0 1.125rem;
    border-radius: 0.25rem;
    color: white;
`

const RowX = styled.div`
    color: white;
    display:inline-flex;
    justify-content: space-between;
`

const Row2X = styled.div`
    color: white;
    display:inline-flex;
    justify-content: space-between;
    gap: 2rem;
`

const LabelX = styled.label``

const ButtonX = styled.button`
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

const ActionX = styled.button`
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

const SpaceX = styled.div``

const FooterX = styled.div`
    padding: 2.5rem 2rem ;
    height: 6rem;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    gap: 2%;
`

const InvoicePopup = () => {

    const [data, setData] = useState({
        adress: "",
        country: "",
        city: "",
        code: "",
        clname: "",
        clemail: "",
        cladress: "",
        clcountry: "",
        clcity: "",
        clcode: "",
        date:"",
        term:"",
        description:"",
        itname:"",
        itquantity:"",
        itprice:"",
    })
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]:input.value })
      }
    const createInvoice = async () => {
        await axios.post('http://localhost:5000/api/expense/create',data)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

  return (
    <> 
        <WrapperX> 
        <ContainerX>
            <TitleX> New Invoice </TitleX>
            <SubtitleX> Bill From </SubtitleX>
            <GroupX>
                <LabelX> Street Adress </LabelX>
                <InputX />
            </GroupX>
            <RowX>
                <GroupX>
                    <LabelX> Country </LabelX>
                    <InputX />
                </GroupX>
                <GroupX>
                    <LabelX> City </LabelX>
                    <InputX />
                </GroupX>
            </RowX>
            <GroupX>
                <LabelX> Post Code </LabelX>
                <InputX />
            </GroupX>
            <SubtitleX> Bill To </SubtitleX>
            <GroupX>
                <LabelX> Client's Name </LabelX>
                <InputX />
            </GroupX>
            <GroupX>
                <LabelX> Client's Email </LabelX>
                <InputX />
            </GroupX>
            <GroupX>
                <LabelX> Street Address </LabelX>
                <InputX />
            </GroupX>
            <RowX>
                <GroupX>
                    <LabelX> Country </LabelX>
                    <InputX />
                </GroupX>
                <GroupX>
                    <LabelX> City </LabelX>
                    <InputX />
                </GroupX>
            </RowX>
            <GroupX>
                <LabelX> Post Code </LabelX>
                <InputX />
            </GroupX>
            <GroupX>
               <LabelX> Invoice Date </LabelX>
                <DateX type="date"/>
            </GroupX> 
            <GroupX>
               <LabelX> Payment Terms </LabelX>
                <DateX type="date"/>
            </GroupX>
            <GroupX>
                <LabelX> Project Description </LabelX>
                <InputX />
            </GroupX>
            <Title2X> Item List (1) </Title2X>
            <GroupX>
                <LabelX> Item Name </LabelX>
                <InputX />
            </GroupX>
            <Row2X>
                <GroupX>
                    <LabelX> Qty. </LabelX>
                    <Input2X />
                </GroupX>
                <GroupX>
                    <LabelX> Price </LabelX>
                    <Input2X />
                </GroupX>
                <GroupX>
                    <LabelX> Total </LabelX>
                    <SpaceX> 0.00 </SpaceX>
                </GroupX>
                <GroupX>
                    <SpaceX> <FaTrashAlt/> </SpaceX>
                </GroupX>
            </Row2X>
            <ButtonX> + Add New Item </ButtonX>
            <FooterX>
                <ActionX style={{backgroundColor:"#252945"}}> Discard </ActionX>
                <ActionX style={{backgroundColor:"#373b53"}}> Save as Draft </ActionX>
                <ActionX style={{backgroundColor:"#7c5dfa"}}> Save & Send </ActionX>      
            </FooterX>
        </ContainerX>  
        </WrapperX>
    </>
  );
}

export default InvoicePopup;