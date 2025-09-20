const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function createTrip({ busId, monitorId, driverId, plannedStart }) {
  const { data, error } = await supabase
    .from('trips')
    .insert([{
      bus_id: busId,
      monitor_id: monitorId,
      driver_id: driverId,
      planned_start: plannedStart,
      status: 'scheduled'
    }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

async function startTrip(tripId) {
  const { data, error } = await supabase
    .from('trips')
    .update({
      status: 'in_progress',
      actual_start: new Date().toISOString()
    })
    .eq('id', tripId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

async function completeTrip(tripId) {
  const { data, error } = await supabase
    .from('trips')
    .update({
      status: 'completed',
      actual_end: new Date().toISOString()
    })
    .eq('id', tripId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

module.exports = { createTrip, startTrip, completeTrip };
