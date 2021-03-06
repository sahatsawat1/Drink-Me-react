import React from 'react'
import styled from 'styled-components'
import FormCard from '../components/Profile/index'
import Hand from '../components/Hand/index'
import Button from '../components/Button'
import { Link } from 'react-router-dom'



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

function Profile () {
  return (
    <>
      <Wrapper>
        <Content>
        <Hand>
          PROFILE
        </Hand>
        </Content>
         <FormCard />
        <Button>
        <Link to='/EditProfile'>EDIT</Link>
        </Button>
      </Wrapper>  
    </>
  )
}
export default Profile
