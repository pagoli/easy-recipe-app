import styled from "styled-components";
import { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const movingBg = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  h4 {
    font-size: 1.5rem;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  margin: 2rem 0;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: rgb(255, 222, 23);
  background: radial-gradient(
    circle,
    rgba(255, 222, 23, 1) 0%,
    rgba(110, 231, 183, 1) 100%
  );
  background-size: 150% 150%;
  /* background: linear-gradient(
    90deg,
    rgba(255, 222, 23, 1) 0%,
    rgba(110, 231, 183, 1) 100%
  ); */
  /* animation: ${movingBg} 5s linear infinite; */
  /* border: 1px solid rgb(255, 222, 23); */
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  &:hover {
    background: rgb(110, 231, 183);
  }
  h4 {
    color: black;
    font-size: 1.3rem;
    padding-top: 0.5rem;
    font-family: "Josefin Sans";
  }
  svg {
    color: black;
    font-size: 2rem;
  }
  &.active {
    background: rgb(110, 231, 183);
    background-size: 150% 150%;
    animation: ${movingBg} 5s linear infinite;
    svg {
      color: black;
    }
    h4 {
      color: black;
    }
  }
`;

export { List, SLink };
