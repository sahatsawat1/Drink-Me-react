import React from 'react'
import styled from 'styled-components'
import FormCard from '../components/FormCard/index'
import Button from '../components/Button'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

=======
import Hand from '../components/Hand/index'
>>>>>>> 20fcf5f2aea102bcca273525e58fef7ae75a696d


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
<<<<<<< HEAD
         <FormCard />
          <Button>
           Sign Up
          </Button>
=======
<<<<<<< HEAD
         <FormCard />
          <Button >
          <Link to='/Profile'>Sign Up</Link>
          </Button>
=======
        <FormCard />
        <Button />
>>>>>>> 20fcf5f2aea102bcca273525e58fef7ae75a696d
>>>>>>> b2cc5ae904dc453e499d353f46fc0fe3db60e129
      </Wrapper>
      
    </>
  )
}
export default SignUp
