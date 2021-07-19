import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colors, device, GlobalStyle } from './styles/global';

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleIsDisabled = () => setIsDisabled((previousState) => !previousState);

  return (
    <>
      <Description>
        <span>Styled Components Example</span>
      </Description>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Description>
            <span>Click the Toggle button to toggle between the buttons activity</span>
          </Description>
          <Container>
            <Button onClick={toggleIsDisabled} className="toggle">
              Toggle
            </Button>
            <BottomGroup>
              <Button>Primary Button</Button>
              <CustomButton>Custom Button</CustomButton>
            </BottomGroup>
          </Container>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;

const theme = {
  primary: 'coral',
  secondary: 'blueviolet',
};

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.secondary};
  font-size: 18px;
  height: 60px;
  text-align: center;

  span {
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BLACK};
  height: 100vh;

  ${Description} {
    color: ${(props) => props.theme.primary};
    font-size: 26px;
    margin-bottom: 20px;
    max-width: 450px;
    line-height: 1.5;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 600px;
  height: 300px;
  background-color: white;
  transition: all 0.5s ease-in-out;
  box-shadow: inset 0px 0px 20px 15px #ff7f4f;
  @media ${device.laptop} {
    background-color: black;
  }
`;

const BottomGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  opacity: 0.3;
  cursor: not-allowed;
  height: 30px;
  width: 130px;
  font-size: 16px;

  &.toggle {
    opacity: 1;
    cursor: pointer;
    margin-top: 20px;
    height: 60px;
    min-width: 150px;
    background-color: ${(props) => props.theme.primary};
    border: 0;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${(props) => props.theme.secondary};
    }
  }
`;

const CustomButton = styled(Button)`
  height: 60px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
`;
