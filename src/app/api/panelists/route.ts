import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  const req = await request.json();
  if (req.oshi === -1) {
    return new Response(JSON.stringify({ error: "Invalid oshikabu" }), { status: 422 });
  }
  try {
    const { data, error } = await supabase
      .from('panelists')
      .insert({
        age: req.age,
        income: req.income,
        q1: req.q1,
        q2: req.q2,
        q3: req.q3,
        oshikabu: req.oshi,
      })
      .select('id')
      .limit(1)

    if (error) {
      console.error("Error inserting data:", error)
      return new Response(JSON.stringify({ error: error.message }), { status: 422 });
    }

    return new Response(JSON.stringify({ id: data[0].id }), { status: 201 });
  } catch (err) {
    console.error("Unexpected error:", err)
    return new Response(JSON.stringify({ error: "Unexpected error occurred" }), { status: 500 });
  }
}
