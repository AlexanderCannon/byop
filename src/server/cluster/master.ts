import { fork, Worker } from "cluster";
import * as os from "os";
import { logger } from "../lib/logger";

const log = (i: number, worker: Worker, msg: string, ...args: any[]) => {
  const s = `worker[${i}] pid[${worker.process.pid}] ${msg}`;
  return {
    info: () => logger.info(s, ...args),
    error: () => logger.error(s, ...args),
  };
};

function spawn(workers: Worker[], index: number) {
  workers[index] = fork();

  workers[index]
    .on("fork", () => log(index, workers[index], "forked").info())
    .on("online", () => log(index, workers[index], "online").info())
    .on("listening", (address) =>
      log(index, workers[index], "listening", address).info(),
    )
    .on("disconnect", () => {
      log(index, workers[index], "disconnected").info();
      logger.info("Starting another worker...");
      workers[index].removeAllListeners();
      spawn(workers, index);
    })
    .on("exit", (code, signal) => {
      if (signal) {
        log(index, workers[index], `killed by: ${signal}`).info();
      } else if (code !== 0) {
        log(index, workers[index], `exited with code: ${code}`).info();
      } else {
        log(index, workers[index], `finished successfully!`).info();
      }
    })
    .on("error", (err) => log(index, workers[index], "error", err).error());
}

// cl < 0 -> use all cpus minus cl
// cl = 0 -> use all cpus
// cl > 0 -> use cl cpus
function getClusterCount(total: number, clusterCount: number): number {
  let cl = clusterCount;
  if (cl < 0) {
    cl = total - cl;
  } else if (cl === 0) {
    cl = total;
  }

  if (cl < 0) {
    cl = 1;
  }
  if (cl > total) {
    cl = total;
  }

  return cl;
}

function* iterator(start = 0, end = 100, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

export const master = (processes = 1): void => {
  const workers: Worker[] = [];
  const clusterSize = getClusterCount(os.cpus().length, processes);

  for (const w of iterator(0, clusterSize)) {
    spawn(workers, w);
  }
};
