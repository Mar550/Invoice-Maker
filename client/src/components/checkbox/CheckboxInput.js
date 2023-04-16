import React, {useContext} from 'react'
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { tablet } from '../../responsive';
import { ThemeContext } from '../../App';

const CheckboxList = ({ invoiceList, checked, setChecked}) => {

    const statusList = ["Paid", "Pending", "Draft"]
    const { darkMode } = useContext(ThemeContext)


    const handleCheckBox = (e,index) => {
      console.log(e.target.name)  
      const activeStatus = document.getElementById(index).checked
      console.log(activeStatus)
        if (activeStatus == true) {
          setChecked(prevState=>[...prevState, ...invoiceList.filter(invoice=> invoice.status == e.target.name)])
        } else {
          setChecked(checked.filter(invoice => invoice.status !== e.target.name))
        }
    }

    return (
      <>
      { darkMode ? 
      <Container>
          { statusList.map((status,index) => ( 
          <div key={index}>
          <Checkbox id={index} type="checkbox" name={status} onChange={(e) => handleCheckBox(e,index)} /> <span style={{marginLeft:"0.5rem"}}> {status} </span>
          </div>
          ))}
      </Container>
      :
      <ContainerLight>
          { statusList.map((status,index) => ( 
          <div key={index}>
          <Checkbox id={index} type="checkbox" name={status} onChange={(e) => handleCheckBox(e,index)} /> <span style={{marginLeft:"0.5rem"}}> {status} </span>
          </div>
          ))}
      </ContainerLight>
      }
      </>
    )
}

const Container = styled.div`
    background-color: #252945;
    box-shadow: 0 10px 20px rgba(0,0,0,.25);
    display:flex;
    flex-direction:column;
    border-radius: 0.5rem;
    width: 15rem;
    height: 9rem;
    padding: 1rem;
    font-size: 16px;
    gap: 1rem;
    margin-right: 1.2rem;
    ${tablet({width:"13rem"})};
`

const ContainerLight = styled.div`
    background-color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,.25);
    display:flex;
    flex-direction:column;
    border-radius: 0.5rem;
    width: 15rem;
    height: 9rem;
    padding: 1rem;
    font-size: 16px;
    gap: 1rem;
    margin-right: 1.2rem;
    ${tablet({width:"13rem"})};
`

export default CheckboxList;