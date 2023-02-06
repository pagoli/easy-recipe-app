import { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useParams, Link } from "react-router-dom";
import { Wrapper, Card, Grid } from "../styles/CuisineStyle";

const Searched = () => {
  const {
    cuisine,
    getCuisine,
    // setCuisine,
    // searchedRecipes,
    // setSearchedRecipes,
    isLoading,
  } = useContext(Context);
  let { searchResults } = useParams();

  useEffect(() => {
    // setSearchedRecipes(searchResults);
    getCuisine(searchResults);
    // }, [searchResults, searchedRecipes]);
  }, [searchResults]);

  // useEffect(() => {
  // if (userSearch === undefined || userSearch === null) {
  //   setUserSearch("");
  // }
  // console.log("Search Results ====>", searchResults);
  // setUserSearch(searchResults);
  // console.log("userSearch ===>", userSearch);
  // setSearchedRecipes(userSearch);
  // console.log("Selected Recipes => ", searchedRecipes);
  // }, [searchResults, userSearch]);

  // const getSearch = async (name) => {
  //   const data = await fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
  //       import.meta.env.VITE_API_KEY
  //     }&number=9&query=${name}`
  //   );
  //   const recipes = await data.json();
  //   if (data.status !== 200) {
  //     res.send("No data from API");
  //     res.end;
  //     // fetchLocalData();
  //   }
  //   if (recipes.results > 0) {
  //     setIsLoading(true);
  //   }
  //   setSearchedRecipes(recipes.results);
  //   console.log("Searched Recipes", recipes.results);
  //   // SEARCHED RECIPES SHOULD NOW BE ADDED TO LOCAL STORAGE
  //   // TO PREVENT TOKEN
  //   localStorage.setItem(
  //     `${params.searchResults}`,
  //     JSON.stringify(recipes.results)
  //   );
  // };

  // useEffect(() => {
  //   if (searchedRecipes !== undefined || searchedRecipes !== null) {
  //     setIsLoading(false);
  //   }
  //   getSearch(params.searchResults);
  // }, [params.searchResults]);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {searchResults ? (
        <h3>
          Your search:{" "}
          {searchResults.charAt(0).toUpperCase() + searchResults.slice(1)}
        </h3>
      ) : (
        <></>
      )}
      <Grid
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {(isLoading && cuisine === undefined) || cuisine === null ? (
          <div>
            <h3>No recipes</h3>
          </div>
        ) : (
          cuisine?.map((recipe) => {
            return (
              <Card key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h4>{recipe.title}</h4>
                </Link>
              </Card>
            );
          })
        )}
      </Grid>
    </Wrapper>
  );
};

export { Searched };
