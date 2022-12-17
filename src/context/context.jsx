import React, { createContext, useState } from "react";

const Context = createContext();

export default function ContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [detailedRecipe, setDetailedRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        cuisine,
        setCuisine,
        searchedRecipes,
        setSearchedRecipes,
        detailedRecipe,
        setDetailedRecipe,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
