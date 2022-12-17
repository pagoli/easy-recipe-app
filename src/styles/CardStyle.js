import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3 {
    font-size: 3rem;
    font-family: "Josefin Sans";
  }
  /* @media (max-width: 1300px) {
    flex-direction: column;
  } */
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
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
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export { Wrapper, Card, Gradient };
