import React, { useState } from 'react'
import styled from 'styled-components'
import TableCard from '../components/TableCard/index'

const FakeNav = styled.div`
  width: 100%;
  height: 19vh;
`

const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8%;
`

function Table () {

  const [ em , setEm ] = 
    useState({ 
      box1: 'ว่าง',
      box2: 'ว่าง',
      box3: 'ว่าง',
      box4: 'ว่าง',
      box5: 'ว่าง',
      box6: 'ว่าง',
      box7: 'ว่าง',
      box8: 'ว่าง',
      box9: 'ว่าง',
    })

  return (
    <React.Fragment>

      <FakeNav />

      <TableWrapper>

        <TableCard Em={em.box1}>
          {em.box1}
        </TableCard>

        <TableCard Em={em.box2}>
          {em.box2}
        </TableCard>

        <TableCard Em={em.box3}>
          {em.box3}
        </TableCard>

        <TableCard Em={em.box4}>
          {em.box4}
        </TableCard>

        <TableCard Em={em.box5}>
          {em.box5}
        </TableCard>

        <TableCard Em={em.box6}>
          {em.box6}
        </TableCard>

        <TableCard Em={em.box7}>
          {em.box7}
        </TableCard>

        <TableCard Em={em.box8}>
          {em.box8}
        </TableCard>

        <TableCard Em={em.box9}>
          {em.box9}
        </TableCard>

        <button onClick={() => ( em.box1 === 'ว่าง' ? setEm({...em,box1 : 'ไม่ว่าง'}) : setEm({...em,box1 : 'ว่าง'}) )}></button>

      </TableWrapper>
    </React.Fragment>
  )
}
export default Table
