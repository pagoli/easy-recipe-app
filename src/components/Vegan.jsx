import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import { Wrapper, Card, Gradient } from "../styles/CardStyle";

const Vegan = () => {
  const [vegan, setVegan] = useState([]);
  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    const check = localStorage.getItem("vegan");

    if (check) {
      setVegan(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9&tags=vegan`
      );
      const data = await api.json();

      localStorage.setItem("vegan", JSON.stringify(data.recipes));
      setVegan(data.recipes);
      // console.log(data.recipes);
    }
  };

  return (
    <>
      <Wrapper>
        <h3>Vegan Picks</h3>

        <Splide
          options={{
            perPage: 3,
            type: "loop",
            breakpoints: {
              1024: {
                perPage: 2,
                gap: "2rem",
              },
              767: {
                perPage: 2,
                gap: ".5rem",
              },
              640: {
                perPage: 1,
                gap: ".5rem",
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {vegan.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
};

export default Vegan;
