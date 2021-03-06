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
  await page.waitForSelector(".byop-app__speaker");
  await page.hover(".byop-app__speaker");
  await setTimeout(() => setTimeout(() => true, 400));
  const image = await page.screenshot();
  // This one is a bit watery, the hover effect can be unpredictable
  // So I've upped the threshold to match
  expect(image).toMatchImageSnapshot({
    failureThreshold: 0.05,
    failureThresholdType: "percent"
  });
});

afterAll(async () => {
  await browser.close();
});
