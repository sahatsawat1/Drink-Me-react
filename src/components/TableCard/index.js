import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  border-radius: 12px;
  margin-top: 9%;
  width: 15%;
  height: 15%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  border-color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  border: 8px solid;
  padding: 3.1% 6.2% ;
  &:nth-child(3n+0){
    padding-left: 0;
  }
  &:nth-child(3n-2){
    padding-right: 0;
  }
`

const Card = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  right: 12px;
  p{
    font-size: 24px;
  }
`

function TableCard (props) {
  return (
    <>
      <CardWrapper color={props.Em}>
        <Card>
          <p>{props.children}</p>
        </Card>
        <p>B01</p>
      </CardWrapper>
    </>
  )
}

export default TableCard