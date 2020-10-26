import React from 'react'
import { HandWrapper, Hander } from './styles'

function Hand (props) {
  return (
    <HandWrapper>
      <Hander>
        <p>{props.children}</p>
      </Hander>
    </HandWrapper>
  )
}
export default Hand