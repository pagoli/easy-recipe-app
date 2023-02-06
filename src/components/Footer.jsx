import { FooterBox } from "../styles/FooterStyle";

const Footer = () => {
  return (
    <FooterBox>
      <p>
        This Website uses the{" "}
        <a href="https://spoonacular.com/food-api/">Spoonacular API</a>
      </p>
      <p>
        Created by <a href="https://github.com/pagoli">pagoli</a>
      </p>
    </FooterBox>
  );
};

export { Footer };
