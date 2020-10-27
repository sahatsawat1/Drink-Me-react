import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import TableCard from '../components/OrderCard'
import Hand from '../components/Hand/index'
import { UsableOrderContext } from '../contexts/OrderContext'

const FakeNav = styled.div`
  width: 100%;
  height: 19vh;
`

const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0% 8%;
`
const Content = styled.div`
  p{
    font-size: 30px;
    font-weight: 700;
  }
`

const Status = styled.div`

`

export const Action = styled.li`
  list-style-type: none;
`

function Table () {
  const { state, setState} = useContext(UsableOrderContext);
    

  return (
    <React.Fragment>

      <FakeNav />

      <Content>
        <Hand>
          Table
        </Hand>
      </Content>

      <Status>

      </Status>

      <TableWrapper>

        <TableCard state={state.box1}>
          {state.box1}
        </TableCard>

        <TableCard state={state.box2}>
          {state.box2}
        </TableCard>
        <TableCard state={state.box3}>
          {state.box3}
        </TableCard>
        <TableCard state={state.box4}>
          {state.box4}
        </TableCard>
        <TableCard state={state.box5}>
          {state.box5}
        </TableCard>
        <TableCard state={state.box6}>
          {state.box6}
        </TableCard>
        <TableCard state={state.box7}>
          {state.box7}
        </TableCard>
        <TableCard state={state.box8}>
          {state.box8}
        </TableCard>
        <TableCard state={state.box9}>
          {state.box9}
        </TableCard>

      </TableWrapper>

    </React.Fragment>
  )
}
export default Table
