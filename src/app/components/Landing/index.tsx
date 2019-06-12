import Box from "@material-ui/core/Box";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import Counter from "../Counter";
import Speaker from "../Speaker";
import "./style.css";

const Landing: React.FunctionComponent = () => (
  <Box className="byop-app--landing">
    <Helmet>
      <title>React London</title>
    </Helmet>
    <img
      className="uni-cmp--splash"
      src="https://images.unsplash.com/photo-1557128928-66e3009291b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      height="100%"
      alt="bg-image"
    />
    <Speaker />
    <Counter />
  </Box>
);

export default Landing;
