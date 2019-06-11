import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

const ScrollToTop: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
  children,
}) => {
  React.useEffect(() => scrollTo(0, 0), [pathname]);

  // need this casting, typings seem to be a bit off
  return children as React.ReactElement;
};

export default withRouter(ScrollToTop);
