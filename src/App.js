import React from 'react';
import Header from '../src/components/Header';
import styled from 'styled-components';
import cyberstreet from '../src/assets/images/cyberstreet.jpg'

const AppLayout = styled.div`
  display: grid;
  justify-content: center;
  height: 100vh;
  background-image: url(${cyberstreet});
`
const Button = styled.button`
  height: 30px;
  width: 150px;
  border: 0;
  border-radius: 0.5em;
  outline: none;
  color: #fff;
  background-color: ${(props) => props.primary && 'green'};
  &:hover {
    background-color: red;
  }
`

function App() {

  return (

    <AppLayout backgroundImage>
      <Header />
      <Button primary>CLICK ME</Button>
    </AppLayout>

  );
}

export default App;
