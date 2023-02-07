import { FaCarrot, FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiCupcake, GiChopsticks } from "react-icons/gi";
import { List, SLink } from "../styles/CategoryStyle";

const Category = () => {
  return (
    <List>
      <SLink to={"/easy-recipe-app/cuisine/vegan"}>
        <FaCarrot />
        <h5>Vegan</h5>
      </SLink>
      <SLink to={"/easy-recipe-app/cuisine/italian"}>
        <FaPizzaSlice />
        <h5>Italian</h5>
      </SLink>
      <SLink to={"/easy-recipe-app/cuisine/american"}>
        <GiHamburger />
        <h5>American</h5>
      </SLink>
      <SLink to={"/easy-recipe-app/cuisine/chinese"}>
        <GiChopsticks />
        <h5>Chinese</h5>
      </SLink>
      <SLink to={"/easy-recipe-app/cuisine/desserts"}>
        <GiCupcake />
        <h5>Desserts</h5>
      </SLink>
    </List>
  );
};

export { Category };
