import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useParams, Link } from "react-router-dom";
import { Card, Grid } from "../styles/CuisineStyle";

const Searched = () => {
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
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearch(params.searchResults);
  }, [params.searchResults]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Searched;
