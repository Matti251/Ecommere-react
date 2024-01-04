import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterContextProvider from "./context/FilterContext";
import MainRouter from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <FilterContextProvider>
    <MainRouter />
  </FilterContextProvider>
);
