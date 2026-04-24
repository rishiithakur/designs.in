import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yyeatieukjjvqpnkygmd.supabase.co'
const supabaseKey = 'sb_publishable_1jU1pPcTYYvYjhMtjo-ZjQ_T2qaWcIG'

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key missing')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkGallery() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .limit(1)
  
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Columns:', Object.keys(data[0] || {}))
    console.log('Data:', data)
  }
}

checkGallery()
