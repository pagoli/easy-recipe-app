import { createGlobalStyle } from "styled-components";
import JosefinSans300 from "/assets/fonts/josefin-sans-v25-latin-300.ttf?import";
import JosefinSans400 from "/assets/fonts/josefin-sans-v25-latin-regular.ttf?import";
import JosefinSans700 from "/assets/fonts/josefin-sans-v25-latin-700.ttf?import";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: "Josefin Sans";
  src: url(${JosefinSans300}) format('truetype');
  font-style: normal;
  font-weight: 300;
  font-display: auto;
}

@font-face {
  font-family: "Josefin Sans";
  src: url(${JosefinSans400}) format('truetype');
  font-style: normal;
  font-weight: 300;
  font-display: auto;
}

@font-face {
  font-family: "Josefin Sans";
  src: url(${JosefinSans700}) format('truetype');
  font-style: normal;
  font-weight: 300;
  font-display: auto;
}
`;

export default FontStyles;
