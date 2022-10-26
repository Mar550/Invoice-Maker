import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios";

// Chart 
//Type: Income, Expense, Gross Revenue
//Periodicity: Yearly, Monthly, Weekly, Daily
//From: Date
//To: Date
// https://stackoverflow.com/questions/32685197/mongoose-how-to-choose-one-of-two-types

const New = () => {

  const [type, setType] = useState('')
  const [periodicity, setPeriodicity] = useState('')
  const [start, setStart] = useState()
  const [end, setEnd] = useState()

  const newChart = async () => {
    const chart = {type,periodicity,start,end};
    await axios.post('http://localhost:5000/api/chart/create',chart)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <Wrapper>
        <h1> Create New Chart </h1>
        <form >
        <div>
          <span className="span" id="inputGroup-sizing-default"> Type </span>
          <select className="form-select"  aria-label="Default select example" name="type" onChange={(e)=>setType(e.target.value)}>
            <option> Income </option>
            <option> Expense </option>
            <option> Gross Revenue </option>
          </select>
        </div>  
        
        <div>
          <span id="inputGroup-sizing-default"> Periodicity </span>
          <select className="form-select" aria-label="Default select example" name="periodicity" onChange={(e)=>setPeriodicity(e.target.value)}>
            <option> Yearly</option>
            <option> Monthly </option>
            <option> Weekly </option>
            <option> Daily </option>
          </select> 
        </div>

        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default"> From </span>
          </div>
          <input type="date" value={start} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"   onChange={(e)=>setStart(e.target.value)}/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default"> To </span>
          </div>
          <input type="date" value={end} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"  onChange={(e)=>setEnd(e.target.value)}/>
        </div>

        <button type="button" onClick={newChart}> CREATE </button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
export default New