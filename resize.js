// resize.js
const sharp = require('sharp');
const path = require('path');

const inputFile = 'C:/Users/CAIO/Documents/GitHub/ivoneth-banqueteria/public/android-chrome-512x512.png';
const outputFile = 'C:/Users/CAIO/Documents/GitHub/ivoneth-banqueteria/public/android-chrome-192x192.png';

sharp(inputFile)
  .resize(192, 192)
  .toFile(outputFile)
  .then(() => console.log(`Imagem redimensionada: ${outputFile}`))
  .catch(err => console.error(err));