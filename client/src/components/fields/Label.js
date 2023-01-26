import React from 'react'
import styled from 'styled-components'


const Label = (props) => {
  return (
    <>
     { props.mode ?
      <LabelDark> {props.title }</LabelDark>
      :
      <LabelLight> {props.title} </LabelLight>
    }
    </>
  )
}

const LabelLight = styled.label`
    font-size: 14px;
    color: #7e88c3;
`
const LabelDark = styled.label`
    font-size: 14px;
    color: white;
`
export default Label;