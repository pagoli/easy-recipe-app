import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/context";
import FontStyles from "./styles/FontStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ContextProvider>
    <FontStyles />
    <BrowserRouter basename="/easy-recipe-app">
      <App />
    </BrowserRouter>
  </ContextProvider>
);
