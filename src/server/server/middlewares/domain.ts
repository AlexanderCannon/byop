import { create } from "domain";
import { NextFunction, Request, Response } from "express";
import { Server as HTTPServer } from "http";
import { logger } from "../../lib/logger";

// Tricky this one, deprecated and no alternatives
export const domainMiddleware = (rawServer: HTTPServer | undefined) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const domain = create();

  domain.add(req);
  domain.add(res);

  domain.on("error", (err) => {
    // log errors
    logger.error(err);

    // gracefully refuse requests and close existing before exit
    if (rawServer) {
      rawServer.close(() => {
        process.exit(1);
        logger.info("Server has been closed");
      });
    }

    // if longer than 20 seconds force exit - doesn't block event loop
    setTimeout(() => {
      process.exit(1);
      logger.info("Server has been forced to close");
    }, 20000).unref();

    // // @todo This should be within master code
    // if (!cluster.worker.suicide) {
    //   cluster.worker.disconnect();
    // }

    next(err);
  });

  domain.run(() => next());
};
