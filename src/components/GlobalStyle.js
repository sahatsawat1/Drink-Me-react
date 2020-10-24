import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    width: 100vw;
    font-size: 16px;
    font-family: 'Roboto' , sans-serif;
    scroll-behavior: smooth;
    background-color: rgba(28, 29, 34, 1);
    color: #DFCFAF;
    overflow-x: hidden;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

`

export default GlobalStyle
