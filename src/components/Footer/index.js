import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo2.png'

const FooterWrapper = styled.div`
  width: 100vw;
  padding: 1% 1%;
  background-color: #DFCFAF;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 12%;
  }
  p{
    color: rgb(28, 29, 34);
    font-size: 12px;
  }
`

export const Card = styled.div`

`

function Footer () {
  return (
    <>
      <FooterWrapper>
        <img src={Logo} />
        <p>Drink Me © 2020 All rights reserved.</p>
      </FooterWrapper>
    </>
  )
}

export default Footer