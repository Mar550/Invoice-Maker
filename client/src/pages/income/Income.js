import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import PopupI from './Popup';

const Income = () => {

  const [incomeList, setIncomeList] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:5000/api/income/all`).then(res => {
        const result = res.data
        setIncomeList(result)
      });
    }
    fetchData()
  },[])

  const deleteIncome = async(_id) => {
    await axios.delete(`http://localhost:5000/api/income/delete/${_id}`)
    .then(window.location.reload())
    .catch(err => console.log(err))
  }

  //Another useEffect with the function inside the current useEffect

  return (
    <Wrapper>
      <div>
        <div className='header'>
          <h1> Incomes </h1>
          <button type="button" id='openPopup' className="btn btn-secondary" onClick={() => setButtonPopup(true)}> ADD NEW </button>       
        </div>
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th> ID </th>
          <th> Title </th>
          <th> Amount </th>
          <th> Date </th>
        </tr>
      </thead>
      <tbody>
      {incomeList.map(income => (
        <tr>
          <td>{income._id.slice(3,6)}</td>
          <td>{income.title}</td>
          <td>{income.amount}</td>
          <td className="date">{income.date.slice(0,10)}
          <span className="buttons">  
            <Button variant="outline-warning">Update</Button>
            <Button onClick={()=>deleteIncome(income._id)} variant="outline-danger">Delete</Button>
          </span>
          </td> 
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    <div> 
      <PopupI trigger={buttonPopup} setTrigger ={setButtonPopup}/>              
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 2rem;
.header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.table{
  width: 70rem;
  margin-top: 2rem;
}
.buttons{
  margin-left: 53%;
  display:flex;
  flex-direction: row;
  gap:0.5rem;
}
.date{
  display:flex;
  flex-direction:row;
  gap: 1rem;
}
#openPopup{
  width: 7rem;
  height: 2.7rem;
  font-weight: 600;
}
`

export default Income