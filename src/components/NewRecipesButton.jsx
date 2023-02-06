import { RecipesButton } from "../styles/HomeStyle";

const NewRecipesButton = ({
  category,
  getNewFrontRecipes,
  countVegan,
  countPopular,
}) => {
  return (
    <RecipesButton
      type="button"
      tabIndex="0"
      onClick={() => getNewFrontRecipes(category, countVegan, countPopular)}
    >
      Get New Recipes
    </RecipesButton>
  );
};

export { NewRecipesButton };
