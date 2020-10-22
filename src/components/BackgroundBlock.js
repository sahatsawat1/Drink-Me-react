import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed;  */
  /* position: relative; */
`
const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function BackgroundBlock ({ src, height = 100, children }) {
  return (
    <BackgroundImage src={src} height={height}>
      <BackgroundOverlay>{children}</BackgroundOverlay>
    </BackgroundImage>
  )
}
export default BackgroundBlock
