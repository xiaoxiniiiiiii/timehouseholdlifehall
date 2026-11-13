import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = 'C:/Users/Administrator/.codex/generated_images/01a03d49-79aa-7551-a640-62dc8ac710bd'
const out = 'public/products'
await fs.mkdir(out, { recursive: true })
const sheets = [
  ['exec-2c45bc4d-431b-4012-bf3d-a2cc1a32215e.png', 5, 2],
  ['exec-fc99c538-acfa-4502-9f40-a846abf6a70c.png', 5, 2],
  ['exec-25b3b5fb-adb6-4f10-b1a6-bec7b5444a9a.png', 2, 5],
  ['exec-5af8715e-e685-4ab5-b788-a71f84b839e4.png', 5, 2],
  ['exec-8de63e21-9aba-40bf-9b23-ab24602c54f3.png', 5, 2],
]
let id = 1
for (const [file, cols, rows] of sheets) {
  const input = path.join(root, file)
  const meta = await sharp(input).metadata()
  const tileWidth = Math.floor(meta.width / cols)
  const tileHeight = Math.floor(meta.height / rows)
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      await sharp(input).extract({ left: col * tileWidth, top: row * tileHeight, width: tileWidth, height: tileHeight }).resize(720, 720, { fit: 'cover' }).webp({ quality: 84 }).toFile(path.join(out, `catalog-${String(id).padStart(2, '0')}.webp`))
      id += 1
    }
  }
}
await sharp(path.join(root, 'exec-3bbc7a07-7948-4efd-92e7-3d5bfd384206.png')).resize(720, 720, { fit: 'cover' }).webp({ quality: 84 }).toFile(path.join(out, 'catalog-28.webp'))
await sharp(path.join(root, 'exec-07f0950d-0497-4785-8465-de30595768c8.png')).resize(720, 720, { fit: 'cover' }).webp({ quality: 84 }).toFile(path.join(out, 'catalog-36.webp'))
await sharp(path.join(root, 'exec-bacd2f08-da34-46b6-916d-e34f9568ca51.png')).resize(720, 720, { fit: 'cover' }).webp({ quality: 84 }).toFile(path.join(out, 'catalog-41.webp'))
console.log('Created 50 local WebP product images.')
