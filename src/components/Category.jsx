import { FaCarrot, FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiCupcake, GiChopsticks } from "react-icons/gi";
import { List, SLink } from "../styles/CategoryStyle";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/vegan"}>
        <FaCarrot />
        <h4>Vegan</h4>
      </SLink>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <GiHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
      <SLink to={"/cuisine/desserts"}>
        <GiCupcake />
        <h4>Desserts</h4>
      </SLink>
    </List>
  );
};

export default Category;
