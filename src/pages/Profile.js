import React from 'react'
import styled from 'styled-components'
import FormCard from '../components/Profile/index'
import Footer from '../components/Footer'
import Button from '../components/Button'


const Wrapper = styled.div`
  padding: 5% 5%;
`

const Hand = styled.div`
  margin: 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  p{
    font-size: 40px;
    font-weight: 900;
  }
`
const Content = styled.div`
  padding: 2% 13%;
  p{
    font-size: 30px;
    font-weight: 700;
  }
`


function SignUp () {
  return (
    <>
      <Wrapper>
        <Content>
        <Hand>
          <p>Profile</p>
        </Hand>
        </Content>
        <FormCard />
      </Wrapper>
      
    </>
  )
}
export default SignUp
