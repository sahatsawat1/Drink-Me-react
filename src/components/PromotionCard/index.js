import React from 'react'
import styled from 'styled-components'
import PromoImg from '../../assets/PromotionCard.png'

const CardWrapper = styled.div`

`

export const Card = styled.div`

`

function PromotionCard () {
  return (
    <>
      <CardWrapper>
        <Card>
          <img src={PromoImg} />
        </Card>
      </CardWrapper>
    </>
  )
}

export default PromotionCard