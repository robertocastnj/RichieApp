import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

/* 🔧 CONFIGURATION */
const SUPABASE_URL = 'https://kuwhcnnhhtpjqnrbbdkc.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1d2hjbm5oaHRwanFucmJiZGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4ODA1MDUsImV4cCI6MjA3NzQ1NjUwNX0.w8gW5HPi1nlzThNMAUp38X8cQ9wFKpih_WT3tSasjJ8' // ⚠️ Usa la service_role key (no anon)
const BUCKET = 'images'
const TABLE = 'images'
const CREATED_AT = new Date().toISOString()

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

/* 🧠 Description generator */
function getDescription(category, subcategory, name) {
  const clean = name.replace(/\.[^/.]+$/, '')
  if (category === 'stickers' && subcategory)
    return `Sticker de ${subcategory} - ${clean}`
  if (category === 'playeras') return `Diseño de playera - ${clean}`
  if (category === 'posters') return `Póster artístico - ${clean}`
  if (category === 'eventos') return `Imagen de evento - ${clean}`
  return clean
}

/* 🧩 Recursive listing using the Supabase SDK (works reliably) */
async function listAllFiles(prefix = '') {
  const files = []

  // List all entries in current prefix
  const { data, error } = await supabase.storage.from(BUCKET).list(prefix)

  if (error) {
    console.error(`❌ Error reading ${prefix || 'root'}:`, error.message)
    return files
  }

  for (const item of data) {
    if (item.name.endsWith('/')) continue // skip invalid folder markers

    const fullPath = prefix ? `${prefix}/${item.name}` : item.name

    // Check if it's a folder or a file
    const isFolder = !item.metadata && !item.name.includes('.')
    if (isFolder) {
      const subFiles = await listAllFiles(fullPath)
      files.push(...subFiles)
    } else {
      files.push(fullPath)
    }
  }

  return files
}

/* 🚀 MAIN FUNCTION */
async function main() {
  console.log('🚀 Listing all files recursively from Supabase Storage...')

  const topFolders = ['stickers', 'posters', 'playeras', 'eventos']
  const allFiles = []

  for (const folder of topFolders) {
    console.log(`📁 Exploring ${folder}...`)
    const files = await listAllFiles(folder)
    allFiles.push(...files)
  }

  console.log(`🧩 Total images found: ${allFiles.length}`)

  if (!allFiles.length) {
    console.log('⚠️ No files found — check bucket permissions or paths.')
    return
  }

  const records = allFiles.map((path, i) => {
    const parts = path.split('/')
    const category = parts[0] || ''
    const subcategory = parts.length > 2 ? parts[1] : ''
    const name = parts[parts.length - 1]
    const description = getDescription(category, subcategory, name)
    const public_url = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`

    return {
      name,
      description,
      category,
      subcategory,
      file_path: path,
      public_url,
      user_id: null,
      created_at: CREATED_AT,
    }
  })

  // 💾 Local CSV backup
  const header = Object.keys(records[0]).join(',')
  const rows = records.map((img) =>
    Object.values(img)
      .map((v) => (v === null ? 'NULL' : `"${v}"`))
      .join(',')
  )
  fs.writeFileSync('supabase_images.csv', [header, ...rows].join('\n'))
  console.log('💾 CSV backup created: supabase_images.csv')

  // ⬆️ Upload to Supabase table
  console.log('⬆️ Uploading data to table...')
  const { error: insertError } = await supabase.from(TABLE).upsert(records, {
    onConflict: 'file_path',
  })

  if (insertError) {
    console.error('❌ Error inserting data:', insertError)
  } else {
    console.log(`✅ Synced ${records.length} images to table successfully!`)
  }

  console.log('🎉 Done!')
}

main().catch(console.error)
