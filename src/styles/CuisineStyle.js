import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  margin: 4rem 0rem;
  h3 {
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled(motion.div)`
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
    padding: 1rem;
  }
`;

export { Wrapper, Grid, Card };
