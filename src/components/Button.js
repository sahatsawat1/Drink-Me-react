import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
  .content{
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

function Button () {
  return <Card>
  <div className="content">
    <button>Sign Up</button>
  </div>
</Card>
}
export default Button
