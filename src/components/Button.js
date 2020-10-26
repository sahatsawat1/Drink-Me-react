import React from 'react'
import styled from 'styled-components'

const Card = styled.div`

`

const Content = styled.div`
  text-align: center;
  padding: 3% 5%;
  button{
    text-decoration: none;
    background-color: #DFCFAF;
    border: 1px solid #1C1D22;
    border-radius: 7px;
    padding: 10px 20px;
    color: #DFCFAF;
    font-size: 20px;
    color: black;
  }

`

function Button (props) {
  return (
    <Card>
      <Content>
        <button>{props.children}</button>
      </Content>
    </Card>
  )
}
export default Button
