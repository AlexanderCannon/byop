import * as React from "react";
import { Route, RouteComponentProps } from "react-router";

interface IStatusInput {
  code: number;
  children: React.ReactElement[];
}

const routeRender = (code: number, children: React.ReactElement[]) => ({
  staticContext,
}: RouteComponentProps) => {
  if (staticContext) staticContext.statusCode = code;
  return children;
};

export const Status: React.FunctionComponent<IStatusInput> = ({
  code,
  children,
}) => <Route render={routeRender(code, children)} />;
