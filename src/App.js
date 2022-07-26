import React from 'react';
import styled, { createGlobalStyle } from "styled-components"



// components
import Main from './components/Main/Main';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Div = styled.div`
background-color: rgb(250, 250, 250);
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

export default class App extends React.Component {

  render() {
    return (
        <Div>
          <GlobalStyles />
          <Main/>
        </Div>
    );
  }
}