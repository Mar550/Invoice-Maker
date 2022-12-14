import React from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const Expense = () => {
  return (
    <Wrapper>
    <h1> Expenses </h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 2rem;

`

export default Expense