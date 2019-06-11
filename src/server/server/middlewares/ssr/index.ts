import { Request, Response } from "express";
import { render } from "./renderer";
import { IContext, template } from "./template";

const renderer = render();

export const ssrHandler = async (req: Request, res: Response) => {
  // Generate the server-rendered HTML using the appropriate router
  const context: IContext = {};
  const [appTemplate, css] = template(req.originalUrl);

  // If react-router is redirecting, do it on the server side
  try {
    context.url
      ? res.redirect(301, context.url)
      : res.send(await renderer(appTemplate, css));
  } catch (err) {
    // remove this try catch
    res.status(500).send(`Error: ${err.message}`);
  }
};
