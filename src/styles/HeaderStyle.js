import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: var(--fz-3xl);
  font-weight: 400;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
  }
`;
const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 5rem;
    color: black;
    border: 2px solid black;
    border-radius: 50%;
    padding: 0.5rem;
  }
  h2 {
    padding-top: 1rem;
    font-family: "Abril Fatface";
    text-transform: uppercase;
    color: var(--green);
    -webkit-text-stroke: 1px var(--black);
  }
  span {
    /* color: var(--yellow); */
    background: -webkit-linear-gradient(#7fe6a4, #ffde17);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: white; */
    /* font-size: 50px; */
    /* text-shadow: -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5),
      1px -1px 0 rgba(0, 0, 0, 0.5), -1px -1px 0 rgba(0, 0, 0, 0.5); */
    -webkit-text-stroke: 1px var(--black);
  }
`;

export { Logo, Nav };
