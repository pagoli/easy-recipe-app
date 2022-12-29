import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import { Wrapper, Grid, Card } from "../styles/CuisineStyle";
import { Link, useParams } from "react-router-dom";
// useParams allows to pull out the keyword from the link

const Cuisine = () => {
  const { cuisine, setCuisine } = useContext(Context);

  let params = useParams();

  const getCuisine = async (name) => {
    const searchQuery = await getQuery(name);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&${searchQuery}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    // localStorage.setItem(
    //   `${name.toLowerCase()}`,
    //   JSON.stringify(recipes.results)
    // );
  };

  const getQuery = (name) => {
    let result;
    switch (name) {
      case "italian":
      case "american":
      case "Chinese":
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
    getCuisine(params.type);
  }, [params.type]);

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
      <Grid>
        {cuisine === undefined || cuisine === null ? (
          <div>
            <h3>No recipes</h3>
          </div>
        ) : (
          cuisine.map((recipe) => {
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

export default Cuisine;
