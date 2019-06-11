import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import * as React from "React";
import { Helmet } from "react-helmet-async";
import Counter from "../Counter/Counter";
import "./style.css";

const Landing: React.FunctionComponent = () => (
  <div className="uni-app--landing">
    <Helmet>
      <title>Welcome to Unicorn</title>
    </Helmet>
    {/* <img
      className="uni-cmp--splash"
      src="https://images.unsplash.com/photo-1559769228-fa811c9a60f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      height="100%"
      alt="bg-image"
    /> */}
    {/* <h1>Get ready for the next big thing</h1> */}
    <Box>
      <Counter />
    </Box>
  </div>
);

export default Landing;
