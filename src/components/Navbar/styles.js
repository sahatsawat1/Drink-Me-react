
import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  /* position: ${props => (props.isScroll ? 'fixed' : 'static')}; */
  position: fixed;
  z-index: 10000;
  background-color: ${props => (props.isScroll ? 'rgba(28, 29, 34, 0.6)' : 'rgba(28, 29, 34, .9)')};
  color: ${props => (props.isScroll ? '#DFCFAF' : '#DFCFAF')};
  transition: background-color .5s;
`
export const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
`

export const ActionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  a{
    border-right: 1px solid #DFCFAF;
    padding: 0 3rem;
  }
`
export const Action = styled.li`
  list-style-type: none;
`
export const LoginContainer =styled.div`
  font-size: 24px;
  font-weight: 900;
`