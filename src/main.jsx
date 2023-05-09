import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);
