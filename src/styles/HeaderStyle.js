import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import device from "./device";

const Logo = styled(Link)`
  text-decoration: none;
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
    font-size: var(--fz-8xl);
    border: 4px solid var(--black);
    border-radius: 50%;
    padding: 0.5rem;
  }
  h2 {
    padding-top: 1rem;
    font-size: var(--fz-7xl);
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
  @media ${device.laptopL} {
    padding: 2rem 0rem;
    h2 {
      font-size: var(--fz-6xl);
    }
    svg {
      font-size: var(--fz-6xl);
      border: 2px solid var(--black);
    }
  }
  @media ${device.mobileL} {
    /* padding: 2rem 0rem; */
    h2 {
      font-size: var(--fz-5xl);
    }
    svg {
      border: 1.5px solid var(--black);
    }
  }
`;

export { Logo, LogoAnimation, Nav };
