import styled from "styled-components";

const ContentBox = styled.main`
  margin: 2rem 0 0 0;
  h2 {
    margin: 4rem 0rem;
    font-size: 4rem;
    border-bottom: 1px solid #313131;
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
    font-size: 2rem;
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
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  margin-right: 2rem;
  font-weight: 600;
`;

const ImageBox = styled.div`
  margin: 7rem 0 0 5rem;
  display: flex;
  align-content: flex-start;
  height: 100%;
  img {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  width: 80%;
`;

export { ContentBox, DetailWrapper, Button, InfoBox, ImageBox };
