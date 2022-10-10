import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import PopupE from './Popup';

const Expense = () => {

  const [expenseList, setExpenseList] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:5000/api/expense/all`).then(res => {
        const result = res.data
        setExpenseList(result)
      });
    }
    fetchData()
  },[])

  const deleteExpense = async(_id) => {
    await axios.delete(`http://localhost:5000/api/expense/delete/${_id}`)
    .then(window.location.reload())
    .catch(err => console.log(err))
  }

  return (
    <Wrapper>
      <div>
        <div className="header">
        <h1> Expenses </h1>
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
        {expenseList.map(expense => (
        <tr>
          <td>{expense._id.slice(7,10)}</td>
          <td>{expense.title}</td>
          <td>{expense.amount}</td>
          <td className="date">{expense.date.slice(0,10)}
          <span className="buttons">  
            <Button variant="outline-warning">Update</Button>
            <Button variant="outline-danger" onClick={()=>deleteExpense(expense._id)}>Delete</Button>
          </span>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    <div> 
      <PopupE trigger={buttonPopup} setTrigger ={setButtonPopup}/>              
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

export default Expense