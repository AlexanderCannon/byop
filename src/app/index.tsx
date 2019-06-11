import * as React from "react";
import { hydrate, render } from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./vars.css";

import { App } from "./components/App";

const start = process.env.NODE_ENV === "production" ? hydrate : render;

const app = (
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

start(app, document.getElementById("root"));
