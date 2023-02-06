import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
const FrontRecipes = lazy(() => import("../components/FrontRecipes"));
// import { FrontRecipes } from "../components/FrontRecipes";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading components...</div>}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: "var(--opacity-full)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: "var(--duration-page" }}
      >
        <FrontRecipes frontSelect={"vegan"} />
        <FrontRecipes frontSelect={"popular"} />
      </motion.div>
    </Suspense>
  );
};

export default Home;
