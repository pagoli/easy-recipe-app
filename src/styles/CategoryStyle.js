import styled from "styled-components";
import { NavLink } from "react-router-dom";
import device from "./device";

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  @media ${device.tablet} {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    flex: none;
    justify-content: start;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  margin: 2rem 0;
  padding: 0.2rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  color: var(--black);
  text-decoration: none;
  background: var(--yellow);
  background: var(--gradient-radial-green-yellow);
  background-size: 150% 150%;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  &:hover {
    background: var(--green);
  }
  h5 {
    padding-top: 0.5rem;
  }
  svg {
    font-size: var(--fz-sm);
  }
  &.active {
    background: var(--green);
    box-shadow: 1px 1px 2px 1px var(--yellow);
    transform: scale(1.05);
  }
  @media ${device.tablet} {
    border-radius: 10%;
    margin: 1rem 0;
    margin-right: 1rem;
    width: 10rem;
    height: 4rem;
    flex-flow: row nowrap;
    position: relative;
    scroll-snap-align: start;
    h5 {
      font-size: var(--fz-md);
    }
    svg {
      margin: 0 0.1rem;
    }
  }
`;

export { List, SLink };
