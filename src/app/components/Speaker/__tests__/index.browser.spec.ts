import { toMatchImageSnapshot } from "jest-image-snapshot";
import puppeteer from "puppeteer";

expect.extend({ toMatchImageSnapshot });
let browser: puppeteer.Browser;

beforeAll(async () => {
  browser = await puppeteer.launch();
});

test("renders correctly", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:1234/cmp-speaker");
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});

test("changes image on hover", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:1234/cmp-speaker");
  await page.waitForSelector(".byop-app--speaker");
  await page.hover(".byop-app--speaker");
  await setTimeout(() => setTimeout(() => {}, 400));
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});

afterAll(async () => {
  await browser.close();
});
