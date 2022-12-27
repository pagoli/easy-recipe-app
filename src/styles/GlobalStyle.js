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

h2 {
  font-size: var(--fz-5xl)
}

h3 {
  font-size: var(--fz-3xl);
}

h4 {
  font-size: var(--fz-xl);
}

h5 {
  font-size: var(--fz-md);
}

a {
  color: var(--darkFont);
  text-decoration: none;
}
`;

export default GlobalStyle;
