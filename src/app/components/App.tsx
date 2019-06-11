import * as React from "react";
import { Main } from "./Main";

export const App: React.FunctionComponent = () => {
  // can remove this effect when remove material-ui from ssr
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return <Main />;
};
