import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yyeatieukjjvqpnkygmd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_1jU1pPcTYYvYjhMtjo-ZjQ_T2qaWcIG'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey)
