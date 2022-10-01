import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import axios from 'axios';

const Income = () => {

  const [incomeList, setIncomeList] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/income/all`).then(res => {
      const result = res.data
      setIncomeList(result)
    });
  },[])

  return (
    <Wrapper>
      <div>
    <h1> Incomes </h1>
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
      {incomeList.map(income => (
        <tr>
          <td>{income._id.slice(0,4)}</td>
          <td>{income.title}</td>
          <td>{income.amount}</td>
          <td>{income.date.slice(0,10)}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 2rem;

`

export default Income