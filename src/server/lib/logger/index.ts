import pino from "pino";

// const dest = pino.extreme();
export const logger = pino();

// tslint:disable-next-line: no-var-requires
export const expressPino = require("express-pino-logger")({
  logger,
});

const exitHandler = pino.final(logger, (err, finalLogger, evt) => {
  finalLogger.info(`${evt} caught`);
  if (err) finalLogger.error(err, "error caused exit");
  process.exit(err ? 1 : 0);
});

process.on("beforeExit", () => exitHandler(null, "beforeExit"));
process.on("exit", () => exitHandler(null, "exit"));
process.on("uncaughtException", (err) => exitHandler(err, "uncaughtException"));
process.on("SIGINT", () => exitHandler(null, "SIGINT"));
process.on("SIGQUIT", () => exitHandler(null, "SIGQUIT"));
process.on("SIGTERM", () => exitHandler(null, "SIGTERM"));
