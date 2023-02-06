import styled from "styled-components";
import { device } from "./device";

const Wrapper = styled.div`
  margin: 0rem 0rem 4rem;
`;

const TitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0rem;
  width: 100%;
  h3 {
    display: inline-block;
    width: fit-content;
    line-height: 2.5rem;
    font-size: var(--fz-4xl);
    color: var(--black);
  }
  @media ${device.tablet} {
    h3 {
      font-size: var(--fz-3xl);
    }
  }
  @media ${device.mobileM} {
    h3 {
      font-size: var(--fz-xl);
    }
  }
`;

const RecipesButton = styled.button`
  all: unset;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 2px solid var(--green);
  font-size: var(--fz-md);
  text-align: center;
  color: var(--gray);
  background-color: var(--light-gray);
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
    /* flex-direction: column; */
    padding: 0.5rem 0.8rem;
    font-size: var(--fz-sm);
  }
`;
export { Wrapper, TitleBox, RecipesButton };
