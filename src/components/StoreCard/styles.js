import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 25%;
  padding: 3.1% 6.2% ;
  &:nth-child(3n+0){
    padding-left: 0;
  }
  &:nth-child(3n-2){
    padding-right: 0;
  }
`

export const ImageStore = styled.div`
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