import { supabase } from '../libs/supabase/supabase.js'

async function debug() {
  console.log('🔑 Checking current Supabase client config...')
  console.log('URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log(
    'KEY:',
    import.meta.env.VITE_SUPABASE_ANON_KEY?.slice(0, 15) + '...'
  )

  console.log('\n📦 Listing all buckets:')
  const { data: buckets, error } = await supabase.storage.listBuckets()
  console.log(buckets, error)
}

await debug()
