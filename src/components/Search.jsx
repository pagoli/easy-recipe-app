import { useContext, useState, useEffect } from "react";
import { Context } from "../context/context";
import { FormStyle } from "../styles/SearchStyle";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { input, setInput } = useContext(Context);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/easy-recipe-app/search/${input}`);
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

export { Search };
