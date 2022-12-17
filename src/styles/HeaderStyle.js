import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import AbrilFatFaceTFF from "/assets/fonts/abril-fatface-v19-latin-regular.ttf";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
  }
`;
const Nav = styled.nav`
  @font-face {
    font-family: "Abril Fatface";
    src: url(${AbrilFatFaceTFF}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 5rem;
    color: darkgreen;
    border: 2px solid darkgreen;
    border-radius: 50%;
    padding: 0.5rem;
  }
  h2 {
    padding-top: 1rem;
    font-family: "Abril Fatface";
    text-transform: uppercase;
  }
`;

export { Logo, Nav };
