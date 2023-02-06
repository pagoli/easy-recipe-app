import { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useParams, Link } from "react-router-dom";
import { Wrapper, Card, Grid } from "../styles/CuisineStyle";

const Searched = () => {
  const { cuisine, getCuisine, isLoading } = useContext(Context);
  let { searchResults } = useParams();

  useEffect(() => {
    getCuisine(searchResults);
  }, [searchResults]);

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
