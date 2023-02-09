import React, { createContext, useState } from "react";

const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cuisine, setCuisine] = useState([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [detailedRecipe, setDetailedRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const getCuisine = async (name) => {
    if (
      localStorage[`${name}`] === "undefined" ||
      typeof localStorage[`${name}`] === "undefined"
    ) {
      const localData = await fetchLocalData(name);
      if (localData) {
        localStorage.setItem(
          `${name.split(" ").join()}`,
          JSON.stringify(localData)
        );
        setIsLoading(false);
        setCuisine(localData);
      }
    } else if (localStorage[`${name}`] !== "undefined") {
      setCuisine(JSON.parse(localStorage.getItem(`${name.toLowerCase()}`)));
    } else {
      const searchQuery = await getQuery(name);
      const data = await getRecipesFromAPI(searchQuery);
      const recipes = await data.json();
      localStorage.setItem(
        `${name.split(" ").join("")}`,
        JSON.stringify(recipes.results)
      );
      setIsLoading(false);
      setCuisine(recipes.results);
    }
  };

  const fetchLocalData = async (name) => {
    if (name) {
      // const response = await fetch(`../../src/data/${name.toLowerCase()}.json`);
      const response = await fetch(
        `https://raw.githubusercontent.com/pagoli/easy-recipe-app/main/assets/data/${name.toLowerCase()}.json`
      );

      if (response.status === 200) {
        const recipes = await response.json();
        return recipes;
      } else {
        const dataAPI = await getRecipesFromAPI(name);
        localStorage.setItem(
          `${name.split(" ").join("")}`,
          JSON.stringify(dataAPI)
        );
        setIsLoading(false);
        setCuisine(dataAPI);
      }
    } else {
      console.log("NO LOCAL DATA");
    }
  };

  const getRecipesFromAPI = async (name) => {
    const searchQuery = await getQuery(name);

    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=4&${searchQuery}&apiKey=${apiKey}`
    );

    if (data.status === 200) {
      const recipes = await data.json();
      const { results } = recipes;
      return results;
    } else {
      return [];
    }
  };

  const getQuery = (name) => {
    let result;
    switch (name) {
      case "italian":
      case "american":
      case "chinese":
        result = `cuisine=${name}`;
        break;
      case "vegan":
        result = `diet=${name}`;
        break;
      case "desserts":
        result = `type=${name}`;
        break;
      case "popular":
        result = `query=${name}`;
        break;
      default:
        result = `query=${name}`;
        break;
    }
    return result;
  };

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        cuisine,
        setCuisine,
        input,
        setInput,
        type,
        setType,
        detailedRecipe,
        setDetailedRecipe,
        activeTab,
        setActiveTab,
        fetchLocalData,
        getCuisine,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
