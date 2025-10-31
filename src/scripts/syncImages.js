import { supabase } from '../libs/supabase/supabase.js'

const BUCKET = 'images'

async function test() {
  console.log('🧩 Listing root of bucket:')
  let { data, error } = await supabase.storage
    .from(BUCKET)
    .list('', { limit: 100 })
  console.log(data, error)

  console.log('\n🧩 Listing stickers/:')
  let stickers = await supabase.storage
    .from(BUCKET)
    .list('stickers', { limit: 100 })
  console.log(stickers.data, stickers.error)

  console.log('\n🧩 Listing stickers/breakingbad/:')
  let breakingbad = await supabase.storage
    .from(BUCKET)
    .list('stickers/breakingbad', { limit: 100 })
  console.log(breakingbad.data, breakingbad.error)
}

await test()
