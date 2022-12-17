import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import { Wrapper, Card, Gradient } from "../styles/CardStyle";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular(); // as soon as page loads, get Popular gets evoked
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      // console.log(data.recipes);
    }
  };

  return (
    <>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "4rem",
            type: "loop",
            breakpoints: {
              1024: {
                perPage: 3,
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
          }}
        >
          {popular.map((recipe) => {
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

export default Popular;
