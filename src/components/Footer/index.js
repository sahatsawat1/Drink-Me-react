import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'

const FooterWrapper = styled.div`
  width: 100vw;
  padding: 1% 1%;
  background-color: #DFCFAF;
  a{  
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 12%;
    }
  }
  p{
    color: rgb(28, 29, 34);
    font-size: 12px;
  }
`

function Footer () {
  return (
    <>
      <FooterWrapper>
        <Link to='/'>
          <img src={Logo} />
          <p>Drink Me © 2020 All rights reserved.</p>
        </Link>
      </FooterWrapper>
    </>
  )
}

export default Footer