import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Register from "./components/Register";
// import Login from "./components/Login.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
