import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
${Variables};
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  text-decoration: none;
  font-family: var(--font-main);
  color: var(--darkFont);
}

body {
  margin: 0% 15%;
  background-image: url(/images/recipe_bg_white.png);
  background-size: auto;
}

h4 {
  font-size: var(--fz-4xl);
}

h3 {
  font-size: var(--fz-5xl);
  line-height: 2.5rem;
  margin: 2rem 0rem;
}

a {
  color: var(--darkFont);
  text-decoration: none;
}
`;

export default GlobalStyle;
