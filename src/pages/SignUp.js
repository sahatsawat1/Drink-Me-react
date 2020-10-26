import React from 'react'
import styled from 'styled-components'
import FormCard from '../components/FormCard/index'
import Button from '../components/Button'
import Hand from '../components/Hand/index'


const Wrapper = styled.div`
  padding: 5% 5%;
`

const Content = styled.div`
  padding: 4% 13%;
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
          SIGN UP
        </Hand>
        </Content>
        <FormCard />
        <Button />
      </Wrapper>
      
    </>
  )
}
export default SignUp
