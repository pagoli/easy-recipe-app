import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { Wrapper, Grid, Card } from "../styles/CuisineStyle";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const { getCuisine, cuisine, isLoading } = useContext(Context);

  let { type } = useParams();

  useEffect(() => {
    getCuisine(type);
  }, [type]);

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
      {type ? <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3> : <></>}
      <Grid variants={container} initial="hidden" animate="show">
        {isLoading && cuisine?.length <= 0 ? (
          <h4>Loading...</h4>
        ) : (
          cuisine?.map((recipe) => {
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

export { Cuisine };
