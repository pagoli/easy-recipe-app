import styled from "styled-components";
import { device } from "./device";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const ErrorBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  h3 {
    display: inline-block;
    width: fit-content;
    line-height: 2.5rem;
    font-size: var(--fz-4xl);
    color: var(--black);
    margin-right: 3rem;
  }
  @media ${device.tablet} {
    flex-flow: column wrap;
    align-items: center;
    h3 {
      font-size: var(--fz-3xl);
      margin-right: 0rem;
    }
  }
  @media ${device.mobileL} {
    h3 {
      font-size: var(--fz-2xl);
    }
  }
  @media ${device.mobileM} {
    h3 {
      font-size: var(--fz-xl);
    }
  }
`;

const HomeButton = styled.button`
  all: unset;
  padding: 1.2rem 1.5rem;
  margin: 2rem 0rem;
  border-radius: 10px;
  border: 2px solid var(--light-red);
  font-size: var(--fz-xl);
  text-align: center;
  color: var(--black);
  background-color: var(--light-red);
  cursor: pointer;
  &:hover {
    background-color: var(--light-yellow);
    border: 2px solid var(--yellow);
    color: var(--black);
  }
  &:focus {
    outline: purple;
  }
  @media ${device.tablet} {
    /* padding: 0.5rem 0.8rem;
    font-size: var(--fz-md); */
  }
`;
export { Wrapper, ErrorBox, HomeButton };
