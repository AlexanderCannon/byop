import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Status } from "./Status";

export const NotFound: React.FunctionComponent = () => (
  <Status code={404}>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <div>Oh no! 404! 😱</div>
  </Status>
);
