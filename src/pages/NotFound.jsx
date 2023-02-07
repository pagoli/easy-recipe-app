// import React from "react";
import { Wrapper, ErrorBox, HomeButton } from "../styles/ButtonStyle";

const NotFound = () => {
  return (
    <Wrapper>
      <ErrorBox>
        <h3>This page does not exist.</h3>
        <HomeButton
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go To Home
        </HomeButton>
      </ErrorBox>
    </Wrapper>
  );
};

export { NotFound };
