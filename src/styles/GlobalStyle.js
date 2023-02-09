import { createGlobalStyle } from "styled-components";
import { Variables } from "./Variables";
import BG_white from "/images/recipe_bg_white.png";

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
  background-image: url(${BG_white});
  background-size: auto;
  
}

h2 {
  font-size: var(--fz-6xl)
}

h3 {
  font-size: var(--fz-3xl);
  line-height: 5rem;
  font-weight: normal;
}

h4 {
  font-size: var(--fz-xl);
}

h5 {
  font-size: var(--fz-xl);
}

a {
  color: var(--darkFont);
  text-decoration: none;
  cursor: pointer;
}

input::placeholder {
  font-size: var(--fz-lg);
}
`;

export { GlobalStyle };
