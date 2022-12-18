import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
  }
`;

export { Logo, Nav };
