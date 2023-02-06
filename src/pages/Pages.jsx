import Home from "./Home";
import Cuisine from "../pages/Cuisine";
import Recipe from "../pages/Recipe";
import { Searched } from "../pages/Searched";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  let location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/search/:searchResults" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Pages;
