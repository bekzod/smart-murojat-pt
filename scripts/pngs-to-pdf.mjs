import fs from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';

const INPUT_DIR = path.resolve('exports');
const OUTPUT_FILE = path.join(INPUT_DIR, 'slides.pdf');

const files = (await fs.readdir(INPUT_DIR))
  .filter((name) => name.toLowerCase().endsWith('.png'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (files.length === 0) {
  throw new Error(`No PNG files found in ${INPUT_DIR}`);
}

const pdfDoc = await PDFDocument.create();

for (const file of files) {
  const filePath = path.join(INPUT_DIR, file);
  const pngBytes = await fs.readFile(filePath);

  const pngImage = await pdfDoc.embedPng(pngBytes);
  const { width, height } = pngImage.scale(1);

  const page = pdfDoc.addPage([width, height]);

  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width,
    height,
  });

  console.log(`Added: ${file}`);
}

const pdfBytes = await pdfDoc.save();
await fs.writeFile(OUTPUT_FILE, pdfBytes);

console.log(`PDF created: ${OUTPUT_FILE}`);
