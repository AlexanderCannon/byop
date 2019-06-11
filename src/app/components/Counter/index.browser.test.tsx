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
test("renders an incremented counter after click", async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:1234");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});

afterAll(async () => {
  await browser.close();
});
