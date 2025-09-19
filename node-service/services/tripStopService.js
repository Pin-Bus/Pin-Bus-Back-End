const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function markArrived(stopId) {
  const { data, error } = await supabase
    .from('trip_stops')
    .update({
      status: 'arrived',
      arrived_at: new Date().toISOString()
    })
    .eq('id', stopId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

async function markPicked(stopId) {
  const { data, error } = await supabase
    .from('trip_stops')
    .update({
      status: 'picked',
      picked_at: new Date().toISOString()
    })
    .eq('id', stopId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

module.exports = { markArrived, markPicked };
