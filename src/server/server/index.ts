import compression from "compression";
import express from "express";
import { Server } from "http";
import { join } from "path";
import { expressPino, logger } from "../lib/logger";
import { domainMiddleware } from "./middlewares/domain";
import { ssrHandler } from "./middlewares/ssr";

// need to do something better with this favicon so that it's available on both versions
import faviconIco from "../../../public/favicon.ico";

export const server = (port = 8882) => (): Server => {
  const app = express();

  let rawServer;

  app.use(domainMiddleware(rawServer));
  app.use(expressPino);

  app.use(compression());

  // Favicon
  const faviconFileName = faviconIco.slice(faviconIco.lastIndexOf("/") + 1);
  app.use("/favicon.ico", (_, res) => {
    res.sendFile(join(__dirname, `../server/${faviconFileName}`));
  });

  // for CSS/images and the like
  app.use("/dist", express.static(`${__dirname}/../client`));

  // Anything unresolved is serving the application and let
  // react-router do the routing!
  app.get("/*", ssrHandler);

  rawServer = app.listen(port, () => {
    logger.info("Server started...", {
      port,
      environment: app.get("env"),
    });
  });

  return rawServer;
};
