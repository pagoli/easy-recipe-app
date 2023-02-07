import { createGlobalStyle } from "styled-components";
import JosefinSans300 from "/fonts/josefin-sans-v25-latin-300.ttf";
import JosefinSans400 from "/fonts/josefin-sans-v25-latin-regular.ttf";
import JosefinSans700 from "/fonts/josefin-sans-v25-latin-700.ttf";
import AbrilFatFaceTFF from "/fonts/abril-fatface-v19-latin-regular.ttf";

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
  font-weight: 400;
  font-display: auto;
}

@font-face {
  font-family: "Josefin Sans";
  src: url(${JosefinSans700}) format('truetype');
  font-style: normal;
  font-weight: 700;
  font-display: auto;
}

@font-face {
  font-family: "Abril Fatface";
  src: url(${AbrilFatFaceTFF}) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
`;

export default FontStyles;
