import React from "react";
import { createRoot } from "react-dom/client"; // Update the import statement

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render( // Update the method call
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
