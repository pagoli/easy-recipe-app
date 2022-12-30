import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { Wrapper, Grid, Card } from "../styles/CuisineStyle";
import { Link, useParams } from "react-router-dom";
// useParams allows to pull out the keyword from the link

const Cuisine = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { cuisine, setCuisine } = useContext(Context);

  let params = useParams();

  const getCuisine = async (name) => {
    const searchQuery = await getQuery(name);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&${searchQuery}`
    );
    console.log("dataaa", data);
    if (data.status !== 200) {
      const localData = await fetch(
        `../../src/data/${name.toLowerCase()}.json`
      );
      const recipes = await localData.json();
      console.log("data from here ?");

      setCuisine(recipes);
    }
    const recipes = await data.json();
    console.log("recipes chinese?", recipes);

    setCuisine(recipes.results);
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

  useEffect(() => {
    console.log("PT", params.type);
    if (cuisine !== undefined || cuisine !== null) {
      setIsLoading(false);
    }
    if (params.type !== undefined) {
      const cuisine = JSON.parse(
        localStorage.getItem(`${params.type.toLowerCase()}`)
      );
      console.log("cuisine Local =>", cuisine);
      if (cuisine !== null) {
        setCuisine(cuisine);
      }
    } else {
      getCuisine(params.type);
    }
  }, [params.type]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {params.type ? (
        <h3>{params.type.charAt(0).toUpperCase() + params.type.slice(1)}</h3>
      ) : (
        <></>
      )}
      <Grid variants={container} initial="hidden" animate="show">
        {console.log("CUISINE=> ", cuisine)}
        {(isLoading && cuisine == undefined) || cuisine === null ? (
          <div>
            <h3>No recipes</h3>
          </div>
        ) : (
          cuisine.map((recipe) => {
            return (
              <Card key={recipe.id} variants={item}>
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

export default Cuisine;
