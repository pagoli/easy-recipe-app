import styled from "styled-components";
import device from "./device";

const FormStyle = styled.form`
  margin: 0rem 15%;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: var(--gradient-linear-green-yellow);
    font-size: var(--fz-2xl);
    color: var(--darkFont);
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    padding-left: 5rem;
    width: 100%;
    &:hover {
      box-shadow: 1px 1px 5px 1px var(--yellow);
    }
    &:focus {
      box-shadow: 1px 1px 5px 1px var(--yellow);
    }
  }
  svg {
    position: absolute;
    top: 11.3%;
    left: -0.8%;
    translate: 100% 50%;
    font-size: var(--fz-xl);
  }

  @media ${device.tablet} {
    margin: 0;
  }
`;

export { FormStyle };
