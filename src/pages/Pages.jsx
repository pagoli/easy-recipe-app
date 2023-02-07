import { Home } from "./Home";
import { Cuisine } from "../pages/Cuisine";
import { Recipe } from "../pages/Recipe";
import { Searched } from "../pages/Searched";
import { NotFound } from "../pages/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  let location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/easy-recipe-app/" element={<Home />} />
          <Route path="/easy-recipe-app/cuisine/:type" element={<Cuisine />} />
          <Route
            path="/easy-recipe-app/search/:searchResults"
            element={<Searched />}
          />
          <Route path="/easy-recipe-app/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export { Pages };
