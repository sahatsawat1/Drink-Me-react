import React from "react"
import styled from 'styled-components'


const ContentDetail = styled.div`
  width: 33%;
 padding: 1% 10%;
  input{
    background-color: rgba(28,29,34,1);
    border: none;
    width: 48.5%;
    padding: 1%;
    border-bottom: 1.5px solid #DFCFAF;
    font-size: 70%;
    color: #DFCFAF;
    outline: none;
    
  }
  p{
    font-size: 16px;
    font-weight: 700;
  } 
`
const Wrapper = styled.div`
padding:0% 20%;
 `
const Content = styled.div`
  width: 33%;
  padding:1% 10%;
  input{
    background-color: rgba(28, 29, 34, 1);
    border: none;
    width:110%;
    padding: 2%;
    border-bottom: 1.5px solid #DFCFAF;
    font-size: 70%;
    color:#DFCFAF;
    outline: none;
  
  }
  p{
    font-size: 16px;
    font-weight: 700;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  outline: none;
  
`

const ContentAge = styled.div`
  width: 33%;
  padding: 1% 10%;
  input{
    background-color: rgba(28,29,34,1);
    border: none;
    width: 20%;
    padding: 1%;
    border-bottom: 1.5px solid #DFCFAF;
    font-size: 70%;
    color: #DFCFAF;
    outline: none;
    
  }
  p{
    font-size: 16px;
    font-weight: 700;
  } 
`
const Contentdata = styled.div`
font-size: 15px;
padding: 5% 0%;
`

function Input() {
  return (
    <Wrapper>

      <ContentWrapper>
          <Content>
            <p>Fullname</p> 
              <Contentdata>
                KORAWIT WILAIRAT
             </Contentdata>
           </Content>
          <Content>
            <p>Phone Number</p> 
             <Contentdata>
               (+66) 805656828
            </Contentdata>
        </Content>
      </ContentWrapper>

      <ContentAge>
        <p>Age</p> 
          <Contentdata>
            20
          </Contentdata>
      </ContentAge>

      <ContentWrapper>
        <Content>
          <p>Username</p> 
            <Contentdata>
              KORAWITICE
           </Contentdata>
        </Content>
        <Content>
          <p>Password</p> 
            <Contentdata>
             ***********
          </Contentdata>
        </Content>
      </ContentWrapper>

    </Wrapper>	
  );
}

export default Input;
