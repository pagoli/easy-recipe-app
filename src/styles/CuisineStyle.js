import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
    object-fit: cover;
  }
  h4 {
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
  }
`;

export { Grid, Card };
