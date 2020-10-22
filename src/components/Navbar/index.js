import React from 'react'
import useScroll from '../../utils/useScroll'
import { Link } from 'react-router-dom'
import { Container, Wrapper, Logo, ActionContainer, Action, LoginContainer } from './styles'

function Navbar () {
  const isScroll = useScroll({ scrollRange: 20 })

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo>LOGO</Logo>
        <ActionContainer>
          <Action>
            <Link to='/'>HOME</Link>
          </Action>
          <Action>
            <Link to='/about'>TABLE</Link>
          </Action>
          <Action>
            <Link to='/contact'>BILL</Link>
          </Action>
        </ActionContainer>
        <LoginContainer>
          <Action>
            <Link to='/contact'>LOGIN</Link>
          </Action>
        </LoginContainer>
      </Wrapper>
    </Container>
  )
}
export default Navbar
