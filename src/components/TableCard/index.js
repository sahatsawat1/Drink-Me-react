import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 26%;
  padding: 1% 5%;
  &:nth-child(3n+0){
    padding-left: 0;
  }
  &:nth-child(3n-2){
    padding-right: 0;
  }
`

const CardWrapper = styled.div`
  border-radius: 12px;
  padding: 20% 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  border-color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  border: 8px solid;
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
      <Container>
        <CardWrapper color={props.Em}>
          <Card>
            <p>{props.children}</p>
          </Card>
          <p>B01</p>
        </CardWrapper>
      </Container>
    </>
  )
}

export default TableCard