import styled from "styled-components";

const FormStyle = styled.form`
  margin: 0rem 20%;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.8rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    padding-left: 5rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 12%;
    left: 0%;
    translate: 100% 50%;
    font-size: 1.8rem;
    color: white;
  }
`;

export { FormStyle };
