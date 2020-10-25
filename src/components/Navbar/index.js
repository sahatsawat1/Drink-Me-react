import React from 'react'
import useScroll from '../../utils/useScroll'
import { Link } from 'react-router-dom'
import Logo2 from '../../assets/logo2.png'
import { Container, Wrapper, ActionContainer, Action, LoginContainer } from './styles'

function Navbar () {
  const isScroll = useScroll({ scrollRange: 20 })

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <img src={Logo2} />
        <ActionContainer>
          <Action>
            <Link to='/'>HOME</Link>
          </Action>
          <Action>
            <Link to='/table'>TABLE</Link>
          </Action>
          <Action>
            <Link to='/bill'>BILL</Link>
          </Action>
        </ActionContainer>
        <LoginContainer>
          <Action>
            <Link to='/login'>LOGIN</Link>
          </Action>
        </LoginContainer>
      </Wrapper>
    </Container>
  )
}
export default Navbar
