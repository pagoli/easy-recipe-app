import styled from "styled-components";
import device from "./device";

const ContentBox = styled.main`
  h2 {
    margin: 4rem 0rem;
    border-bottom: 1px solid #313131;
  }

  @media ${device.laptop} {
    h2 {
      font-size: var(--fz-5xl);
    }
  }
  @media ${device.tablet} {
    h2 {
      margin: 2rem 0rem;
      font-size: var(--fz-4xl);
    }
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  a {
    color: var(--blue);

    &:hover {
      text-decoration: underline;
    }
  }
  ul,
  ol {
    margin-top: 2rem;
    padding-left: 3rem;
    li {
      padding-bottom: 1rem;
      font-size: var(--fz-4xl);
      &::marker {
        color: var(--blue);
      }
    }
  }
  ol li {
    line-height: 3rem;
  }

  @media ${device.laptopL} {
    h3,
    ul > li,
    ol > li {
      font-size: var(--fz-xl);
      line-height: 3.5rem;
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    h3 {
      font-size: var(--fz-xl);
      line-height: 3rem;
    }
  }

  @media ${device.mobileL} {
    h3,
    ul > li,
    ol > li {
      font-size: var(--fz-md);
      line-height: 2.2rem;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 3rem;
  @media ${device.tablet} {
    margin: 1rem 0 3rem;
  }
`;

const Button = styled.button`
  font-size: var(--fz-4xl);
  padding: 2rem 4rem;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 2rem;
  font-weight: 600;
  color: var(--white);
  background: var(--gray);
  opacity: 70%;
  &:hover {
    background: var(--green);
    color: var(--black);
    opacity: 100%;
  }
  &.active {
    background: var(--yellow);
    background: var(--gradient-radial-green-yellow);
    background-size: 150% 150%;
    box-shadow: 1px 1px 2px 1px var(--yellow);
    color: var(--black);
    opacity: 100%;
  }
  &:last-of-type {
    margin-left: 3rem;
  }
  @media ${device.laptopL} {
    margin: 0;
    font-size: var(--fz-xl);
    padding: 1rem 2rem;
  }

  @media ${device.tablet} {
    font-size: var(--fz-lg);
    margin: 0;
  }
  @media ${device.mobileM} {
    font-size: var(--fz-sm);
    &:last-of-type {
      margin-left: 2rem;
    }
  }

  @media ${device.mobileS} {
    padding: 0.8rem 1rem;
  }
`;

const ImageBox = styled.div`
  margin: 0 0 0 3rem;
  display: flex;
  align-content: flex-start;
  height: 100%;
  img {
    width: 100%;
  }

  /* IMAGE SIZE NEEDS TO BE CHECKED */
  @media ${device.laptop} {
    margin: 1rem 0 3rem;
    justify-content: center;
    /* height: fit-content; */
    img {
      /* width: 100%; */
      height: fit-content;
    }
  }
`;

const InfoBox = styled.div`
  width: 80%;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    width: 100%;
  }
`;

export { ContentBox, DetailWrapper, ButtonBox, Button, InfoBox, ImageBox };
