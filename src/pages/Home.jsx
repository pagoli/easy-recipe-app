import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FrontRecipes } from "../components/FrontRecipes";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "var(--opacity-full)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: "var(--duration-page" }}
    >
      <FrontRecipes frontSelect={"vegan"} />
      <FrontRecipes frontSelect={"popular"} />
    </motion.div>
  );
};

export { Home };
