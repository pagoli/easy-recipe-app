import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: var(--fz-3xl);
  font-weight: 400;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const LogoAnimation = styled(motion.div)``;

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
    -webkit-text-stroke: 1px var(--gray);
  }
  span {
    background: -webkit-linear-gradient(#7fe6a4, #ffde17);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--gray);
  }
`;

export { Logo, LogoAnimation, Nav };
