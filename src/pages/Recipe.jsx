import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import {
  ContentBox,
  DetailWrapper,
  Button,
  ImageBox,
  InfoBox,
} from "../styles/RecipeStyle";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const { detailedRecipe, setDetailedRecipe, activeTab, setActiveTab } =
    useContext(Context);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const detailedData = await data.json();
    setDetailedRecipe(detailedData);
    console.log(detailedRecipe.summary);
  };

  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);

  return (
    <ContentBox>
      <h2>{detailedRecipe.title}</h2>
      <DetailWrapper>
        <ImageBox>
          <img src={detailedRecipe.image} alt={detailedRecipe.title} />
        </ImageBox>
        <InfoBox>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          {activeTab === "instructions" && (
            <div>
              <h3
                dangerouslySetInnerHTML={{ __html: detailedRecipe.summary }}
              ></h3>
              <h3
                dangerouslySetInnerHTML={{
                  __html: detailedRecipe.instructions,
                }}
              ></h3>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {detailedRecipe.extendedIngredients.map((ingredient, i) => (
                <>
                  <li key={ingredient[i]}>{ingredient.original}</li>
                </>
              ))}
            </ul>
          )}
        </InfoBox>
      </DetailWrapper>
    </ContentBox>
  );
};

export default Recipe;
