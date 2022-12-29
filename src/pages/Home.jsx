import Vegan from "../components/Vegan";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "var(--opacity-full)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: "var(--duration-page" }}
    >
      <Vegan />
      <Popular />
    </motion.div>
  );
};

export default Home;
