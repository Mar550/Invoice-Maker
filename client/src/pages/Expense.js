import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import axios from 'axios';

const Expense = () => {

  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/expense/all`).then(res => {
      const result = res.data
      setExpenseList(result)
    });
  },[])

  console.log(expenseList)

  return (
    <Wrapper>
    <h1> Expenses </h1>
    <Table striped bordered hover>
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
          <td>{expense._id.slice(0,4)}</td>
          <td>{expense.title}</td>
          <td>{expense.amount}</td>
          <td>{expense.date.slice(0,10)}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 2rem;

`

export default Expense