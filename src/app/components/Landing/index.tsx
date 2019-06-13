import Box from "@material-ui/core/Box";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Counter from "../Counter";
import FarpointLabs from "../FarpointLabs";
import Header from "../Header";
import Speaker from "../Speaker";

import "./style.css";

const Landing: React.FunctionComponent = () => (
  <>
    <Helmet>
      <title>React London</title>
    </Helmet>
    <Header />
    <img
      className="byop-cmp--splash"
      src="https://images.unsplash.com/photo-1557128928-66e3009291b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      height="100%"
      alt="bg-image"
    />
    <Box className="byop-app__landing">
      <div className="byop-app__landing-cards">
        <FarpointLabs />
        <Speaker />
        <Counter />
      </div>
    </Box>
  </>
);

export default Landing;
