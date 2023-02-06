import styled from "styled-components";

const Card = styled.div`
  min-height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  &:hover {
    box-shadow: 2px 2px 2px 1px var(--yellow), -2px -2px 2px 1px var(--green);
  }
  img {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    translate: -50% 0%;
    padding: 0 1rem;
    color: var(--white);
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: var(--fz-2xl);
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      -webkit-text-stroke: 0.5px var(--gray);
      /* color: var(--yellow); */
      scale: 1.05;
    }
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient-images);
`;

export { Card, Gradient };
