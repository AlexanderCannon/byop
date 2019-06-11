import { isMaster } from "cluster";
import { Server } from "http";
import { master } from "./master";

export const start = (server: () => Server, processes: number = 1) =>
  isMaster ? master(processes) : server();
