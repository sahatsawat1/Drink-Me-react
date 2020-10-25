import React from 'react'
import StoreImg from '../../assets/background.jpg'
import { Link } from 'react-router-dom'
import { ImageStore, CardWrapper, Card } from './styles'

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