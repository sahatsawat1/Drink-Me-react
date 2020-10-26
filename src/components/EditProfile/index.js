import React from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonSubmit = styled.button`
      margin: 2%;
      text-decoration: none;
      background-color: #DFCFAF;
      border: 1px solid #1C1D22;
      border-radius: 7px;
      padding: 10px 20px;
      color: #DFCFAF;
      font-size: 20px;
      color: black;      
`
const Buttoncancel = styled.button`
      margin: 2%;
      text-decoration: none;
      background-color:#C0C0C0;
      border: 1px solid #1C1D22;
      border-radius: 7px;
      padding: 10px 20px;
      color: #DFCFAF;
      font-size: 20px;
      color: black;      
`
const ContentDetail = styled.div`
 padding: 1% 5%;
  input{
    background-color: rgba(28,29,34,1);
    border: none;
    width: 48.5%;
    padding: 1%;
    border-bottom: 1.5px solid #DFCFAF;
    font-size: 70%;
    color: black;
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
  width: 50%;
  padding:1% 5%;
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
  padding: 1% 5%;
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
const Button = styled.div`
  padding:5% 0%;
  margin: 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Input() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <p>Fullname</p> 
           <input placeholder="Fristname  Lastname" />
        </Content>
        <Content>
          <p>Phone Number</p> 
           <input placeholder="Please enter your number" />
        </Content>
      </ContentWrapper>

      <ContentAge>
        <p>Age</p> 
         <input placeholder="Enter your Age"/>
      </ContentAge>

      <ContentDetail>
        <p>Username</p> 
         <input placeholder="Username" />
      </ContentDetail>

      <ContentWrapper>
        <Content>
          <p>Password</p> 
           <input type="password" placeholder="Password" />
        </Content>
        <Content>
          <p>Confirm Password</p> 
        <input type="password"placeholder="Confirm Password"   />
        </Content>
      </ContentWrapper>

    <Button>
          <ButtonSubmit>
          <Link to='/Profile'>Submit</Link>
          </ButtonSubmit>
          <Buttoncancel>
          <Link to='/Profile'>Cancel</Link>
          </Buttoncancel>
    </Button>   

    </Wrapper>	
  );
}

export default Input;
