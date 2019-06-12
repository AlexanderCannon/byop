import * as React from "react";
import { Route, Switch } from "react-router";
import Counter from "./Counter";
import Landing from "./Landing";
import { NotFound } from "./NotFound";
import Speaker from "./Speaker";

export const Router: React.FunctionComponent = () => (
  <Switch>
    {process.env.NODE_ENV === "development"
      ? renderDevComponents()
      : productionRoutes()}
    <Route component={NotFound} />
  </Switch>
);

const productionRoutes = () => (
  <>
    <Route exact={true} path="/" component={Landing} />
  </>
);

const renderDevComponents = () => (
  <>
    <Route path="/cmp-counter" component={Counter} />
    <Route path="/cmp-speaker" component={Speaker} />
    {productionRoutes()}
  </>
);
