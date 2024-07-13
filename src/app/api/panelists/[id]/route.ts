import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(req: Request, { params }: { params: { id: string }}) {
  try {
    const { data, error } = await supabase
      .from('panelists')
      .select('*')
      .eq('id', params.id)

    if (error) {
      console.error("Error inserting data:", error)
      return new Response(JSON.stringify({ error: error.message }), { status: 422 });
    }
    console.log(data)
    return new Response(JSON.stringify({ id: data[0].id, oshi: data[0].oshikabu }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err)
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: { id: string }}) {
  try {
    const { data, error } = await supabase
      .from('panelists')
      .update({ buyed: 'true' })
      .eq('id', params.id)
      .select('*')

    if (error) {
      console.error("Error inserting data:", error)
      return new Response(JSON.stringify({ error: error.message }), { status: 422 });
    }
    console.log(data)
    return new Response(JSON.stringify({ id: data[0].id }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err)
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), { status: 500 });
  }
}
