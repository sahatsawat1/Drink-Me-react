import React from 'react'
import backgroundImage from '../assets/background.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title, Subtitle } from '../components/Typography'
import StoreCard from '../components/StoreCard'
import styled from 'styled-components'
// const arr = new Array(1).fill('Hello World')

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: #fff solid 1px;
  border-radius: 8px;
  color: #fff;
  margin: 1rem;
  text-transform: uppercase;

  cursor: pointer;
    transition: background-color 0.3s;
  
    &:hover {
      background-color: #fff;
      color: #000;
    }
  
`


function Home () {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
        <Title>Hello World</Title>
        <Subtitle>Lorem Ipsum</Subtitle>
        <Button as='a' href='#content'>
          Look Around
        </Button>
      </BackgroundBlock>

      <StoreCard />
      
    </>
  )
}
export default Home
