import { start } from "./cluster";
import { load } from "./config";
import { server } from "./server";

const config = load();

start(server(config.port), config.cpu);
