import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import App from "./App";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/personal-note-2">
    <WavyContainer />
    <App />
  </BrowserRouter>
);
