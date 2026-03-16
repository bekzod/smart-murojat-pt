import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const URL = 'http://localhost:5173';
const TOTAL_SLIDES = 18; // change this
const OUT_DIR = path.resolve('exports');

await fs.mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  defaultViewport: {
    width: 1600,
    height: 900,
    deviceScaleFactor: 2,
  },
});

const page = await browser.newPage();

await page.goto(URL, { waitUntil: 'networkidle2' });

// Wait until the app is visible.
// Replace this selector with something stable from your slide UI.
await page.waitForSelector('body');

// Wait for fonts to finish loading.
await page.evaluate(async () => {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
});

// Small pause so animations/layout settle.
await new Promise((resolve) => setTimeout(resolve, 6000));

// Capture slide 1
await page.screenshot({
  path: path.join(OUT_DIR, 'slide-01.png'),
  type: 'png',
});

console.log('Captured slide 1');

for (let i = 2; i <= TOTAL_SLIDES; i++) {
  await page.keyboard.press('ArrowRight');

  // Give React time to render the next slide.
  await new Promise((resolve) => setTimeout(resolve, 6000));

  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  });

  await page.screenshot({
    path: path.join(OUT_DIR, `slide-${String(i).padStart(2, '0')}.png`),
    type: 'png',
  });

  console.log(`Captured slide ${i}`);
}

await browser.close();
console.log(`Done. Images saved in: ${OUT_DIR}`);
