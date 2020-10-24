import React from 'react'
import styled from 'styled-components'
import StoreImg from '../../assets/background.jpg'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
  width: 25%;
  padding: 3.1% 6.2% ;
  &:nth-child(3n+0){
    padding-left: 0;
  }
  &:nth-child(3n-2){
    padding-right: 0;
  }
`

const ImageStore = styled.div`
  img{
    width: 100%;
 }
`

export const Card = styled.div`
  width: 100%;
  background-color: #DFCFAF;
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    text-align: center;
    padding: 15px;
    button{
      text-decoration: none;
      background-color: #1C1D22;
      border: 1px solid #1C1D22;
      border-radius: 7px;
      padding: 4px 16px;
      color: #DFCFAF;
      font-size: 12px;
      color: #DFCFAF;
    }
    h1{
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 8px;
      color: rgb(28, 29, 34);
    }
    p{
      font-size: 12px;
      padding-bottom: 8px;
      color: rgb(28, 29, 34);
    }
  }
`

function StoreCard () {
  return (
    <>
      <CardWrapper>
        <ImageStore>
          <img src={StoreImg} />
        </ImageStore>
        <Card>
          <div className="content">
            <h1>STORE NAME</h1>
            <p>6:00PM - 12:00PM</p>
            <button>ORDER</button>
          </div>
        </Card>
      </CardWrapper>
    </>
  )
}

export default StoreCard