import * as React from "react";
import { Route, Switch } from "react-router";
import Landing from "./Landing";
import { NotFound } from "./NotFound";

export const Router: React.FunctionComponent = () => (
  <Switch>
    <Route exact={true} path="/" component={Landing} />
    <Route component={NotFound} />
  </Switch>
);
