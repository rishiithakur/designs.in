import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yyeatieukjjvqpnkygmd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_1jU1pPcTYYvYjhMtjo-ZjQ_T2qaWcIG'
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkGallery() {
    console.log('Fetching gallery data...');
    const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .limit(5);

    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Gallery Data:', JSON.stringify(data, null, 2));
    }
}

checkGallery();
