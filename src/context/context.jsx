import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Context = createContext();

export default function ContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cuisine, setCuisine] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [detailedRecipe, setDetailedRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const localStorageValues = () => {
    let localKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      localKeys.push(localStorage.key(i).toLowerCase());
    }
    return localKeys;
  };

  const getCuisine = async (name) => {
    const searchQuery = await getQuery(name);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&${searchQuery}`
    );
    console.log("STATUS =>", data.status);
    if (data.status !== 200) {
      fetchLocalData();
    }
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  const fetchLocalData = async () => {
    const localData = await fetch(
      `../../src/data/${params.type.toLowerCase()}.json`
    );
    const recipes = await localData.json();
    setCuisine(recipes);
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
      default:
        result = "no results found.";
    }
    return result;
  };

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&query=${name}`
    );
    const recipes = await data.json();
    // if (data.status !== 200) {
    //   res.send("No data from API");
    //   res.end;
    //   // fetchLocalData();
    // }
    if (recipes.results > 0) {
      setIsLoading(true);
    }
    setSearchedRecipes(recipes.results);
    console.log("Searched Recipes", recipes.results);
    console.log("localStorageSearch => ", params.searchResults);
    // SEARCHED RECIPES SHOULD NOW BE ADDED TO LOCAL STORAGE
    // TO PREVENT TOKEN
    localStorage.setItem(
      `${params.searchResults}`,
      JSON.stringify(recipes.results)
    );
  };

  useEffect(
    () => {
      if (
        cuisine !== undefined ||
        cuisine !== null ||
        searchResults !== undefined ||
        searchResults !== null
      ) {
        console.log("uE => sR", searchResults);
        setIsLoading(false);
      }

      let localKeys = localStorageValues();
      console.log("localKeys", localKeys);
      if (localKeys.includes(params.type)) {
        // console.log("true localKeys included? ", localKeys);
        const cuisine = JSON.parse(
          localStorage.getItem(`${params.type.toLowerCase()}`)
        );
        setCuisine(cuisine);
      }

      if (localKeys.includes(params.searchResults)) {
        // console.log("true localKeys included? ", localKeys);
        const cuisine = JSON.parse(
          localStorage.getItem(`${params.searchResults.toLowerCase()}`)
        );
        setSearchedRecipes(searchedRecipes);
      }

      if (cuisine === null || !localKeys.includes(params.type)) {
        getCuisine(params.type || params.searchResults);
      }
      // if (
      //   searchedRecipes === null ||
      //   !localKeys.includes(params.searchResults)
      // ) {
      //   getSearch(params.searchResults);
      // }
      console.log("searchParams => ", params.searchResults);
      getSearch(params.searchResults);
    },
    [params.type],
    [params.searchResults]
  );

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        cuisine,
        setCuisine,
        isLoading,
        setIsLoading,
        searchedRecipes,
        setSearchedRecipes,
        detailedRecipe,
        setDetailedRecipe,
        activeTab,
        setActiveTab,
        fetchLocalData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
