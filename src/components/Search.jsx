import { useContext, useState } from "react";
import { FormStyle } from "../styles/SearchStyle";
import { FaSearch } from "react-icons/fa";
import { Context } from "../context/context";
import { useNavigate } from "react-router-dom";

const Search = () => {
  // const { input, setInput } = useContext(Context);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

export default Search;
