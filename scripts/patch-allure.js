/**
 * patch-allure.js
 * Copie les fichiers custom (CSS + logo) dans le plugin allure-commandline
 * après chaque `npm install`, pour conserver la personnalisation.
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'allure-custom');
const DEST_DIR = path.join(
  __dirname,
  '..',
  'node_modules',
  'allure-commandline',
  'dist',
  'plugins',
  'custom-logo-plugin',
  'static'
);

if (!fs.existsSync(DEST_DIR)) {
  console.warn(`[patch-allure] Dossier cible introuvable : ${DEST_DIR}`);
  console.warn('[patch-allure] Vérifiez que allure-commandline est installé.');
  process.exit(0);
}

if (!fs.existsSync(SRC_DIR)) {
  console.warn(`[patch-allure] Dossier source introuvable : ${SRC_DIR}`);
  process.exit(0);
}

const files = fs.readdirSync(SRC_DIR).filter((f) =>
  fs.statSync(path.join(SRC_DIR, f)).isFile()
);

files.forEach((file) => {
  const src = path.join(SRC_DIR, file);
  const dest = path.join(DEST_DIR, file);
  fs.copyFileSync(src, dest);
  console.log(`[patch-allure] Copié : ${file}`);
});

console.log('[patch-allure] Personnalisation Allure appliquée avec succès.');
