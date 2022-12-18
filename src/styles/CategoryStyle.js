import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  color: var(--black);
  text-decoration: none;
  background: rgb(255, 222, 23);
  background: var(--gradient-radial-green-yellow);
  background-size: 150% 150%;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  &:hover {
    background: var(--green);
  }
  h4 {
    padding-top: 0.5rem;
  }
  svg {
    font-size: 2rem;
  }
  &.active {
    background: var(--green);
    box-shadow: 1px 1px 5px 1px var(--yellow);
    transform: scale(1.05);
  }
`;

export { List, SLink };
