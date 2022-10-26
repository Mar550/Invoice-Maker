import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { MdDataExploration } from 'react-icons/md';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const Graph = () => {

  //Get all chart
  const [charts, setCharts] = useState()
    useEffect(() => {
      axios.get(`http://localhost:5000/api/chart/all`)
      .then(response => { const result = response.data
        setCharts(result)
      })
      .catch(error => console.log(error));
    }, []);
  console.log(charts)

  //Select last chart created
  const chart = {_id: '635194aeb9624e0fc1e3ddec', type: 'Expense', periodicity: 'Weekly', start: '2022-10-01T00:00:00.000Z', end: '2022-10-19T00:00:00.000Z'}
  const start = Object.values(chart)[3]
  const end = Object.values(chart)[4]
  console.log(start)

  // Get all incomes
  const [incomes, setIncomes] = useState()
  useEffect(() => {
    axios.get(`http://localhost:5000/api/income/all`)
      .then(response => { const result = response.data
        setIncomes(result)
      })
      .catch(error => console.log(error));
  }, []);
    console.log(incomes)

  // Get all expenses
  const [expenses, setExpenses] = useState()
  useEffect(() => {
    axios.get(`http://localhost:5000/api/expense/all`)
    .then(response => { const result = response.data
      setExpenses(result)
    })
    .catch(error => console.log(error));
  console.log(expenses)
  }, []);

  
  // Sum amounts in array
  let currentData = []
  useEffect(() => {
    if (Object.values(chart)[1] === 'Income'){ 
      // Issue: Wee need to take the sum of the incomes by day, month or year, but we can do a function for this along with the labels, depending on the periodicity
        currentData = incomes
    }
    else if (Object.values(chart)[1] === 'Expense'){
       currentData = expenses
    } 
    else if (Object.values(chart)[1] === 'Gross Revenue'){ //Issue

    }    
  }, []);

  // Fetch current data according to the last chart created
  
  const [amounts, setAmounts] = useState([])


  // Get the dates between start and end
  const listDate = [];
  const startDate = start;
  const endDate = end;
  const dateMove = new Date(startDate);
  let strDate = startDate;

  while (strDate < endDate) {
    strDate = dateMove.toISOString().slice(0, 10);
    listDate.push(strDate);
    dateMove.setDate(dateMove.getDate() + 1);
  };

  // If days =< 20 : 1, 
  // If days > 20 and =< 30 : 2, 
  // If days > 30 and =< 40 : 4, 
  // If days > 40 and =< 70 : 5, M
  // If days > 70 and =< 200 : 10, M

  // Labels
  // Days: From 1 to 200
  // Months: From 200 days to 5 years
  // Years: From 5 years

  console.log(listDate)

  const [labels, setLabels] = useState([])


  // Chart Data Sample
  const data= {
    labels: listDate,
    datasets: [{
      data: [8, 7, 11, 13, 9, 12],
      fill: true,
      label: 'Dataset 2',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income Line Chart',
      },
    },
  };
  return (
    <Wrapper>
      <h1 id="titleChart"> Chart </h1>
      <button type="button" > Fetch </button>
      <div id="chartContainer">
          <Line data={data} options={options} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 2rem;

#titleChart{
  margin-left: 45%;
}

#chartContainer{
  margin-top: 2rem;
  width: 60rem;
  margin-left: 4rem;
}

`
export default Graph;

