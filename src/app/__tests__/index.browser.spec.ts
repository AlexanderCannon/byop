import { toMatchImageSnapshot } from "jest-image-snapshot";
import puppeteer from "puppeteer";

expect.extend({ toMatchImageSnapshot });
let browser: puppeteer.Browser;

beforeAll(async () => {
  browser = await puppeteer.launch();
});

test("renders correctly", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:1234");
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});

test("renders correctly", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:1234");
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});

test("counter works in situ", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:1234");
  await page.waitForSelector(".byop-app__counter-button");
  page.$eval(".byop-app__counter-button", (e: any) => e.click());
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});

afterAll(async () => {
  await browser.close();
});
