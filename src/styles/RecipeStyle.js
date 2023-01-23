import styled from "styled-components";
import device from "./device";

const ContentBox = styled.main`
  /* margin: 2rem 0 0 0; */
  h2 {
    margin: 4rem 0rem;
    font-size: var(--fz-5xl);
    border-bottom: 1px solid #313131;
  }

  @media ${device.tablet} {
    /* margin: 1rem 0 0 0; */
    h2 {
      margin: 2rem 0rem;
      font-size: var(--fz-3xl);
      border-bottom: 1px solid #313131;
    }
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h3 {
    font-size: var(--fz-2xl);
    line-height: 3.5rem;
    font-weight: normal;
  }
  a {
    color: darkred;
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
      font-size: 2rem;
      line-height: 2.5rem;
      &::marker {
        color: darkred;
      }
    }
  }
  ol li {
    line-height: 3rem;
  }

  @media ${device.tablet} {
    flex-direction: column;
    h3 {
      font-size: 2rem;
      line-height: 3.5rem;
      font-weight: normal;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  /* height: 100%; */
  img {
    width: 100%;
  }
  @media ${device.tablet} {
    margin: 1rem 0 3rem;
    /* img {
      padding: 3rem 0;
    } */
  }
`;

const Button = styled.button`
  font-size: var(--fz-xl);
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  margin-right: 2rem;
  font-weight: 600;
  @media ${device.tablet} {
    font-size: var(--fz-xl);
    margin: 0;
    &:last-of-type {
      margin-left: 3rem;
    }
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
  @media ${device.tablet} {
    margin: 1rem 0 3rem;
    /* img {
      padding: 3rem 0;
    } */
  }
`;

const InfoBox = styled.div`
  width: 80%;
`;

export { ContentBox, DetailWrapper, ButtonBox, Button, InfoBox, ImageBox };
