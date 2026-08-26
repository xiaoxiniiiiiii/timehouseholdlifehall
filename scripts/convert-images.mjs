import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDir = 'C:/Users/Administrator/.codex/generated_images/01a03d49-79aa-7551-a640-62dc8ac710bd'
const outputDir = 'public/products'
const files = {
  'exec-56a4bda4-c575-46b9-8f06-0db5e84a7107.png': 'rug.webp',
  'exec-e2426afa-780b-4658-99d7-e56605ae1813.png': 'pillows.webp',
  'exec-672f2ab0-a328-4bdf-84db-8351e1130258.png': 'trivet.webp',
  'exec-747b7f48-254b-46cf-a3fd-c991779ac83d.png': 'fruit-bowl.webp',
  'exec-c2801203-aff8-4609-95c8-e131f31bc336.png': 'spice-jars.webp',
  'exec-e311e08a-9e59-4a66-b7e6-16f2ea615d7b.png': 'kitchen-rack.webp',
  'exec-5ac16580-5278-4d34-94a5-61d4ad9ce47c.png': 'shower-curtain.webp',
  'exec-e7dcae0b-e410-4d42-99ff-4323ca22e321.png': 'bath-mat.webp',
  'exec-2c5c67fc-063a-4820-b94d-8625cc65de7d.png': 'towel-rail.webp',
  'exec-841c19c3-bf03-4bf1-a0dc-b0f65557a956.png': 'bath-shelf.webp',
  'exec-da20b75c-dd45-463e-8c61-ae435ae4a4d3.png': 'vanity-tray.webp',
  'exec-6ea52d56-9633-40db-93d5-40c27db7b103.png': 'storage-basket.webp',
}
await fs.mkdir(outputDir, { recursive: true })
for (const [source, target] of Object.entries(files)) {
  await sharp(path.join(sourceDir, source)).resize(800, 800, { fit: 'cover' }).webp({ quality: 84 }).toFile(path.join(outputDir, target))
}
console.log(`Converted ${Object.keys(files).length} product images to WebP.`)
