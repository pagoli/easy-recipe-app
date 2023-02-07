import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { NewRecipesButton } from "../components/NewRecipesButton";

import { Card, Gradient } from "../styles/CardStyle";
import { Wrapper, TitleBox } from "../styles/HomeStyle";

const FrontRecipes = ({ frontSelect }) => {
  const { fetchLocalData } = useContext(Context);
  const [frontRecipes, setFrontRecipes] = useState([]);
  const [countVegan, setCountVegan] = useState(0);
  const [countPopular, setCountPopular] = useState(0);

  useEffect(() => {
    getFrontRecipes(); // On page load, getFrontRecipes gets evoked
  }, []);

  const getFrontRecipes = async () => {
    if (
      localStorage[`${frontSelect}`] === "undefined" ||
      typeof localStorage[`${frontSelect}`] === "undefined"
    ) {
      const localData = await fetchLocalData(frontSelect);
      localStorage.setItem(
        `${frontSelect.split(" ").join()}`,
        JSON.stringify(localData)
      );
      setFrontRecipes(localData);
    }

    if (localStorage[`${frontSelect}`] !== "undefined") {
      setFrontRecipes(
        JSON.parse(localStorage.getItem(`${frontSelect.toLowerCase()}`))
      );
    }
  };

  const getNewFrontRecipes = async (frontSelect) => {
    if (
      (countVegan === 0 && frontSelect === "vegan") ||
      (countPopular === 0 && frontSelect === "popular")
    ) {
      let fileName = frontSelect + "_2";
      const localData = await fetchLocalData(fileName);
      if (frontSelect === "vegan") {
        setCountVegan(countVegan + 1);
      } else {
        setCountPopular(countPopular + 1);
      }
      setFrontRecipes(localData);
    } else if (frontSelect === "vegan" && countVegan >= 1) {
      console.log("front select is vegan", frontSelect);
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=4&tags=${frontSelect}`
      );
      const data = await api.json();
      setFrontRecipes(data.recipes);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=4`
      );

      const data = await api.json();
      setFrontRecipes(data.recipes);
    }
  };

  return (
    <>
      <Wrapper>
        <TitleBox>
          <h3>{`${
            frontSelect?.charAt(0).toUpperCase() + frontSelect?.slice(1)
          } Picks`}</h3>
          <NewRecipesButton
            category={frontSelect}
            getNewFrontRecipes={getNewFrontRecipes}
            countVegan={countVegan}
            countPopular={countPopular}
          />
        </TitleBox>

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
          {frontRecipes?.length <= 0 ? (
            <h4>Loading...</h4>
          ) : (
            frontRecipes?.map((recipe) => {
              return (
                <SplideSlide key={recipe?.id}>
                  <Card>
                    <Link to={`/recipe/${recipe?.id}`}>
                      <p>{recipe?.title}</p>
                      <img src={recipe?.image} alt={recipe?.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })
          )}
        </Splide>
      </Wrapper>
    </>
  );
};

export { FrontRecipes };
