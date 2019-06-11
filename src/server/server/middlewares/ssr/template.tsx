import { ServerStyleSheets } from "@material-ui/styles";
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom";
import { App } from "../../../../app/components/App";

export interface IContext {
  url?: string;
}

export const template = (location: string, context: IContext = {}) => {
  // can remove the sheets stuff when we remove material ui
  const sheets = new ServerStyleSheets();
  const appTemplate = ReactDOM.renderToString(
    sheets.collect(
      <StaticRouter location={location} context={context}>
        <HelmetProvider context={{}}>
          <App />
        </HelmetProvider>
      </StaticRouter>,
    ),
  );

  return [appTemplate, sheets.toString()];
};
