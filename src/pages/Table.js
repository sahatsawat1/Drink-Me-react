import React, { useState } from 'react'
import styled from 'styled-components'
import TableCard from '../components/TableCard/index'

const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`


function Table () {

  const [ em , setEm ] = useState({ box1 : 'ว่าง', box2: 'ว่าง', box3: 'ว่าง', box4: 'ว่าง', box5: 'ว่าง'})

  return (
    <React.Fragment>

      <TableWrapper>

        <TableCard Em={em.box1}>
          {em.box1}
        </TableCard>

        <TableCard>
          {em.box2}
        </TableCard>

        <TableCard>
          {em.box3}
        </TableCard>

        <TableCard>
          {em.box4}
        </TableCard>

        <TableCard>
          {em.box5}
        </TableCard>

        <button onClick={() => ( em.box1 === 'ว่าง' ? setEm({...em,box1 : 'ไม่ว่าง'}) : setEm({...em,box1 : 'ว่าง'}) )}></button>

      </TableWrapper>
    </React.Fragment>
  )
}
export default Table
