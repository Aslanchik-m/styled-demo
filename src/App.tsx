import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {colors, device, GlobalStyle} from "./styles/global";

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <Wrapper>
      <Container>
      <Button isactive>Primary Button</Button>
      <Button isactive>Secondary Button</Button>
      <Button isactive={false}>Inactive Button</Button>
      <CustomButton isactive>Custom Button</CustomButton>
      </Container>
    </Wrapper>
    </ThemeProvider>
    </>
   );
  }
  
  export default App;

const theme = {
  primary: 'coral',
  secondary: 'blueviolet'
}

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: ${colors.BLACK};
height: 100vh;
`
const Container = styled.div`
width: 600px;
height: 300px;
display:flex;
align-items:center;
justify-content:space-evenly;
background-color: white;
transition: all 0.5s ease-in-out;

                @media ${device.laptop}{
                  background-color:blue;
                }
`
const Button = styled.button<{readonly isactive?:boolean}>`
display:${props => props.isactive ? 'block' : 'none'};
height: 30px;

`
const CustomButton = styled(Button)`
 height: 60px;
 color: ${props => props.theme.primary};
background-color: ${props => props.theme.secondary}
`
