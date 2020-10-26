import React from 'react'
import backgroundImage from '../assets/background.jpg'
import StoreCard from '../components/StoreCard/index'
import PromoCard from '../components/PromotionCard/index'
import Hand from '../components/Hand/index'
import styled from 'styled-components'

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
          STORE
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
          PROMOTION
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
