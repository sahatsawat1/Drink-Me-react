import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
padding:0% 20%;
 `
const Content = styled.div`
  width: 33%;
  padding:1% 10%;
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
function Profile() {
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

export default Profile;
