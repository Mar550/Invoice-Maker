import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const PopupE = (props) => {

  //Popup state
  const [trigger, setTrigger] = useState(false)

  //Data state
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState();
  const [date, setDate] = useState('');
  

  const createExpense = async () => {
    const expense = {title,amount,date};
    await axios.post('http://localhost:5000/api/expense/create',expense)
    .then( response => console.log(response))
    props.setTrigger(false);
  }
  

  return (props.trigger) ? (
    <Wrap>
      <div className="popup">

      <div className="container">
      <h2 className="title"> NEW EXPENSE </h2> 
      <br/>
      <form onSubmit={createExpense}> 
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label"> Title </label>
        <input 
        type="text" 
        name="title"
        className ="form-control" 
        value={title}  
        onChange={(e)=>setTitle(e.target.value)}
        id="exampleFormControlInput1"/>
        </div>
      <div className="input-group" id="amountmain">
      <label for="exampleFormControlInput1" className="form-label" > Amount </label>
        <div className="amount">
        <input 
        type="number" 
        className="form-control" 
        name="amount"
        value={amount}  
        onChange={(e)=>setAmount(e.target.value)}
        aria-label="Dollar amount (with dot and two decimal places)"/>
        <span className="input-group-text"> € </span>
        </div>
      </div>
      <br/>
      <div className="input-group" id="amountmain">
      <label for="exampleFormControlInput1" className="form-label" > Date </label>
        <div className="amount">
        <input 
        type="date" 
        name="date" 
        className="form-control" 
        value={date}  
        onChange={(e)=>setDate(e.target.value)}
        aria-label="Dollar amount (with dot and two decimal places)"/>
        </div>
      </div>
      <br/>
      <div className='buttonsPopup' >
        <Button type="submit" className="button" variant="primary" size="sm">
          Submit
        </Button>
        <Button  className="button" variant="secondary" size="sm" onClick={() => props.setTrigger(false)}>
          Close
        </Button>
      </div>
        </form>
      </div>
      </div>
    </Wrap>
    ) : "";
  }

const Wrap = styled.div`

.popup{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
}

.container{
  padding: 30px;
  background-color:white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  width: 25rem;
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
}

#amountmain{
  display:flex;
  flex-direction: column;
}

.title{
  font-weight:700;
  text-align:center;
}

.vat{
  display:flex;
  flex-direction: row;
}
.amount{
  display:flex;
  flex-direction: row;
}

.buttonsPopup{
  display:flex;
  gap:4%;
  margin-top: 1.5rem;
}
.button{
  height: 2.7rem;
  width: 48%;
  font-size: 110%;
  font-weight: 600;
}
`

export default PopupE;