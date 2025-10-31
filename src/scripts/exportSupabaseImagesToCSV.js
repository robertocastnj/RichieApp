// src/scripts/exportSupabaseImagesToCSV.js
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const SUPABASE_URL = 'https://kuwhcnnhhtpjqnrbbdkc.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1d2hjbm5oaHRwanFucmJiZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4ODA1MDUsImV4cCI6MjA3NzQ1NjUwNX0.w8gW5HPi1nlzThNMAUp38X8cQ9wFKpih_WT3tSasjJ8'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const BUCKET = 'images'
const FOLDERS = ['eventos', 'playeras', 'posters', 'stickers']
const CREATED_AT = new Date().toISOString()

function getDescription(category, subcategory, name) {
  const clean = name.replace(/\.[^/.]+$/, '')
  if (category === 'stickers' && subcategory)
    return `Sticker de ${subcategory} - ${clean}`
  if (category === 'playeras') return `Diseño de playera - ${clean}`
  if (category === 'posters') return `Póster artístico - ${clean}`
  if (category === 'eventos') return `Imagen de evento - ${clean}`
  return clean
}

async function main() {
  console.log('📦 Listing all images recursively from Supabase Storage...')
  const images = []

  for (const folder of FOLDERS) {
    console.log(`📁 Checking folder: ${folder}`)

    // ✅ Recursive listing for nested subfolders
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list(folder, { recursive: true })

    if (error) {
      console.error(`❌ Error reading ${folder}:`, error)
      continue
    }
    if (!data || data.length === 0) {
      console.log(`⚠️ No files found in ${folder}`)
      continue
    }

    data.forEach((file) => {
      if (file.name.endsWith('/')) return // skip folders
      const relativePath = file.name // e.g. breakingbad/Caravana.jpg
      const parts = relativePath.split('/')
      const subcategory = parts.length > 1 ? parts[0] : ''
      const name = parts.pop()
      const file_path = `${folder}/${relativePath}`
      const public_url = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${file_path}`
      const description = getDescription(folder, subcategory, name)

      images.push({
        id: images.length + 1,
        name,
        description,
        category: folder,
        subcategory,
        file_path,
        public_url,
        user_id: 'NULL',
        created_at: CREATED_AT,
      })
    })
  }

  if (images.length === 0) {
    console.log('⚠️ No image files found in any folder.')
    return
  }

  const header = Object.keys(images[0]).join(',')
  const rows = images.map((img) => Object.values(img).join(','))
  const csv = [header, ...rows].join('\n')

  fs.writeFileSync('supabase_images.csv', csv)
  console.log(`✅ CSV generated successfully with ${images.length} rows!`)
}

main().catch(console.error)
