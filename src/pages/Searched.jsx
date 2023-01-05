import { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useParams, Link } from "react-router-dom";
import { Wrapper, Card, Grid } from "../styles/CuisineStyle";

const Searched = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { searchedRecipes, setSearchedRecipes } = useContext(Context);
  let params = useParams();
  // const navigate = useNavigate();

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=9&query=${name}`
    );
    const recipes = await data.json();
    if (recipes.results > 0) {
      setIsLoading(true);
    }
    setSearchedRecipes(recipes.results);
    console.log("Searched Recipes", recipes.results);
  };

  useEffect(() => {
    if (searchedRecipes !== undefined || searchedRecipes !== null) {
      setIsLoading(false);
    }
    getSearch(params.searchResults);
  }, [params.searchResults]);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {params.searchResults ? (
        <h3>
          Your search:{" "}
          {params.searchResults.charAt(0).toUpperCase() +
            params.searchResults.slice(1)}
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
        {searchedRecipes === undefined ||
        searchedRecipes === null ||
        isLoading === true ? (
          <div>
            <h3>No recipes</h3>
          </div>
        ) : (
          searchedRecipes.map((recipe) => {
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

export default Searched;
