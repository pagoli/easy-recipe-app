import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

export default function ContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  // const [currentLocation, setCurrentLocation] = useState("");
  // const [selectedCuisine, setSelectedCuisine] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  // const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [detailedRecipe, setDetailedRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const getCuisine = async (name) => {
    // console.log("GetCuisine => name", name);
    if (
      localStorage[`${name}`] === "undefined" ||
      typeof localStorage[`${name}`] === "undefined"
    ) {
      // console.log(` INSIDE => ${name} - Storage is undefined.`);
      const localData = await fetchLocalData(name);
      if (localData ?? false) {
        localStorage.setItem(
          `${name.split(" ").join()}`,
          JSON.stringify(localData)
        );
        console.log("Undefined in Storage => LD", localData);
        setIsLoading(false);
        setCuisine(localData);
      }
    } else if (localStorage[`${name}`] !== "undefined") {
      // console.log(` INSIDE => ${name} - Local Storage available.`);
      // console.log("TPYE OF LS", typeof localStorage[`${name}`]);
      setCuisine(JSON.parse(localStorage.getItem(`${name.toLowerCase()}`)));
    }
    // console.log(`END OF ${frontSelect}`, frontRecipes);
    else {
      // console.log("name1 ==> ", name);
      const searchQuery = await getQuery(name);
      const data = await getRecipesFromAPI(searchQuery);
      // console.log("searchQuery ==> ", searchQuery);
      // console.log("DATAAAA ==> ", data);
      // const data = await fetch(
      //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      //     import.meta.env.VITE_API_KEY
      //   }&number=1&${searchQuery}`
      // );
      // console.log("STATUS =>", data.status);
      // if (data.status !== 200) {
      //   // Check Local Storage
      //   console.log("go to fetch locally =>", data.status);
      //   fetchLocalData(name);
      // }
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
    // console.log("fetching Locally - NAME =>", name);
    if (name) {
      // console.log("Inside ", name);
      const response = await fetch(`../../src/data/${name.toLowerCase()}.json`);
      // console.log("response", response);

      if (response.status === 200) {
        // console.log("inside 200");
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
    // console.log("INSIDE getRecipesFromAPI", name);
    // console.log("searchQUery", searchQuery);
    // if (frontSelect === "vegan" && countVegan >= 1) {
    //   console.log("front select is vegan", frontSelect);
    //   const api = await fetch(
    //     `https://api.spoonacular.com/recipes/random?apiKey=${
    //       import.meta.env.VITE_API_KEY
    //     }&number=4&tags=${frontSelect}`
    //   );
    //   const data = await api.json();
    //   setFrontRecipes(data.recipes);
    // } else {

    // console.log("STATUS =>", data.status);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=4&${searchQuery}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (data.status === 200) {
      const recipes = await data.json();
      // console.log("RECIPES =>", recipes);
      const { results } = recipes;
      // console.log("RESULTS =>", results);
      return results;
      // return recipes;
    } else {
      // Check Local Storage
      console.log("go to fetch locally =>", data.status);
      fetchLocalData(searchQuery);
    }

    // const api = await fetch(
    //   `https://api.spoonacular.com/recipes/random?apiKey=${
    //     import.meta.env.VITE_API_KEY
    //   }&number=4`
    // );

    // const data = await api.json();
    // // localStorage.setItem(`${frontSelect}`, JSON.stringify(data.recipes));
    // setCuisine(data.recipes);
    // // }
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
        // result = "no results found.";
        result = `query=${name}`;
    }
    return result;
  };

  // useEffect(() => {
  //   console.log("type =>", type);
  //   console.log("selCuis =>", selectedCuisine);
  //   // }, [location.pathname !== "/", selectedCuisine]);
  // }, [selectedCuisine, input]);

  // useEffect(() => {
  //   // console.log("isLoading =>", isLoading);
  //   // console.log("type =>", type);
  //   // console.log("cuisine =>", cuisine);
  //   // console.log("cuisine Length =>", cuisine?.length);

  //   console.log("Input =>", input);
  // }, [location.pathname !== "/", isLoading]);

  // useEffect(() => {
  //   if (location.pathname !== "/") {
  //     if (
  //       cuisine !== undefined ||
  //       cuisine !== null ||
  //       searchedRecipes !== undefined ||
  //       searchedRecipes !== null
  //     ) {
  //       setIsLoading(false);
  //     }
  //     // console.log("T->S", type != selectedCuisine);
  //     // if (type !== selectedCuisine) {
  //     //   console.log("TYPE =>", type);
  //     //   console.log("SelCUI =>", selectedCuisine);

  //     //   // checkLocalStorage();
  //     // }

  //     let localKeys = localStorageKeys();

  //     // if (selectedCuisine) {
  //     //   console.log(selectedCuisine, "SELCUI");
  //     //   console.log(
  //     //     "getItem",
  //     //     localStorage.getItem(`${selectedCuisine.toLowerCase()}`)
  //     //   );
  //     //   console.log("[] => ", localStorage[`${selectedCuisine.toLowerCase()}`]);
  //     // }

  //     // if (input) {
  //     //   console.log(localStorage[`${input.toLowerCase()}`]);
  //     // }

  //     // if (
  //     //   localStorage.getItem(`${selectedCuisine.toLowerCase()}`) !== null &&
  //     //   localStorage[`${selectedCuisine.toLowerCase()}`] !== undefined &&
  //     //   localKeys.includes(selectedCuisine.toLowerCase())
  //     // ) {
  //     //   const cuisine = JSON.parse(
  //     //     localStorage.getItem(`${selectedCuisine.toLowerCase()}`)
  //     //   );
  //     //   console.log("CUISINE =>", cuisine);
  //     //   setCuisine(cuisine);
  //     // }

  //     // if (
  //     //   localStorage[`${input.toLowerCase()}`] !== undefined ||
  //     //   localStorage[`${input.toLowerCase()}`] !== null ||
  //     //   localKeys.includes(input.toLowerCase())
  //     // ) {
  //     //   const cuisine = JSON.parse(
  //     //     localStorage.getItem(`${input.toLowerCase()}`)
  //     //   );
  //     //   console.log("CUISINE =>", cuisine);
  //     //   setCuisine(cuisine);
  //     // }

  //     if (
  //       selectedCuisine !== "" ||
  //       selectedCuisine !== undefined ||
  //       (selectedCuisine !== null &&
  //         localStorage[`${selectedCuisine}`] === "undefined") ||
  //       typeof localStorage[`${selectedCuisine}`] === "undefined"
  //       // !localKeys.includes(selectedCuisine)
  //     ) {
  //       getCuisine(selectedCuisine);
  //     }
  //     if (
  //       input !== "" ||
  //       searchedRecipes !== undefined ||
  //       searchedRecipes !== null ||
  //       !localKeys.includes(input)
  //     ) {
  //       getCuisine(input);
  //     }
  //     // }, [selectedCuisine, searchedRecipes])
  //   }
  // }, [location.pathname !== "/"]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        // currentLocation,
        // setCurrentLocation,
        // selectedCuisine,
        // setSelectedCuisine,
        cuisine,
        setCuisine,
        input,
        setInput,
        type,
        setType,
        // searchedRecipes,
        // setSearchedRecipes,
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
