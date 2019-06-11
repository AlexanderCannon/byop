import { readFile } from "fs";
import { join } from "path";
import { promisify } from "util";

const readFileP = promisify(readFile);

export const render = () => {
  let template: string | null = null;
  return async (app: string, css: string): Promise<string> => {
    if (!template) {
      template = (await readFileP(
        join(__dirname, "..", "client", "index.html"),
      ))
        .toString()
        .trim();
    }

    return process(template, app, css);
  };
};

const process = (template: string, app: string, css: string): string => {
  return template
    .replace(`<div id="root"></div>`, `<div id="root">${app}</div>`)
    .replace(`<head>`, `<head><style id="jss-server-side">${css}</style>`);
};
