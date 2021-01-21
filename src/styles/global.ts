import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
`

// Define and export breakpoints
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '601px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1100px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`
};

// Define and export color theme
const WHITE = 'white';
const BLACK = 'black';
const ORANGE = "coral";
const GREY = "#f8f8f8";
const PURPLE = "blueviolet";


export const colors = {
    WHITE,
    BLACK,
    ORANGE,
    GREY,
    PURPLE
}