import React from 'react'
import backgroundImage from '../assets/background.jpg'
import StoreCard from '../components/StoreCard/index'
import PromoCard from '../components/PromotionCard/index'
import styled from 'styled-components'
import Footer from '../components/Footer'

const BackgroundBlock = styled.div`
  height: 100vh;
  img{
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const Wrapper = styled.div`
  padding: 5% 4%;
`

const Hand = styled.div`
  margin: 0 45%;
  display: flex;
  border-bottom: 4px solid #DFCFAF;
  justify-content: center;
  align-items: center;
  padding: 15px;
  p{
    font-weight: 900;
    font-size: 3rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PromoContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3.1% 6.2%;
`

function Home () {
  return (
    <>
      <BackgroundBlock>
        <img src={backgroundImage} />
      </BackgroundBlock>
      <Wrapper>
        <Hand>
          <p>STORE</p>
        </Hand>
        <Content>
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </Content>
      </Wrapper>
      <Wrapper>
        <Hand>
          <p>PROMOTION</p>
        </Hand>
        <PromoContent>
          <PromoCard />
          <PromoCard />
          <PromoCard />
        </PromoContent>
      </Wrapper>
    </>
  )
}
export default Home
