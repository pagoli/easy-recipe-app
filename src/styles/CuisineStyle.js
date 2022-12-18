import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  background-color: var(--white);
  border: 0.1rem solid var(--green);
  img {
    width: 100%;
    object-fit: cover;
  }
  h4 {
    text-align: center;
    font-size: var(--fz-xl);
    padding: 1rem;
  }
  &:hover {
    box-shadow: 1px 1px 20px -5px var(--gray);
    transform: scale(1.05);
  }
`;

export { Grid, Card };
