import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const inputDir = path.resolve('./public/images')
const outputDir = path.resolve('./public/images/webp')

// Stelle sicher, dass das Zielverzeichnis existiert
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

const files = fs.readdirSync(inputDir)

for (const file of files) {
  const ext = path.extname(file).toLowerCase()
  const name = path.basename(file, ext)

  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const inputPath = path.join(inputDir, file)
    const outputPath = path.join(outputDir, `${name}.webp`)

    sharp(inputPath)
      .webp({ quality: 60 }) 
      .toFile(outputPath)
      .then(() => console.log(`Konvertiert: ${file} → ${name}.webp`))
      .catch((err) => console.error(`Fehler bei ${file}:`, err))
  }
}
