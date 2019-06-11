import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Router } from "./Router";
import ScrollToTop from "./ScrollToTop";

export const Main: React.FunctionComponent = () => (
  <main className="main">
    <ScrollToTop>
      <Router />
    </ScrollToTop>
  </main>
);
