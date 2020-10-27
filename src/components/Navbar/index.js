import React from 'react'
import useScroll from '../../utils/useScroll'
import { Link } from 'react-router-dom'
import Logo2 from '../../assets/logo2.png'
import Login from '../Login/index'
import { Container, Wrapper, ActionContainer, Action, LoginContainer } from './styles'

function Navbar () {
  const isScroll = useScroll({ scrollRange: 20 })

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Link to='/'>
          <img src={Logo2} />
        </Link>
        <ActionContainer>
          <Action>
            <Link to='/'>HOME</Link>
          </Action>
          <Action>
            <Link to='/table'>TABLE</Link>
          </Action>
        </ActionContainer>
        <LoginContainer>
          <Action>
            <Login />
          </Action>
        </LoginContainer>
      </Wrapper>
    </Container>
  )
}
export default Navbar
