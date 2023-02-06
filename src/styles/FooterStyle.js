import styled from "styled-components";
import { device } from "./device";

const FooterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0rem;
  width: 100%;
  p {
    display: inline-block;
    width: fit-content;
    line-height: 2.5rem;
    font-size: var(--fz-md);
    color: var(--black);
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export { FooterBox };
