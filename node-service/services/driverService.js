const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getAllDrivers() {
  const { data, error } = await supabase.from('drivers').select('*');
  if (error) throw error;
  return data;
}

async function createDriver(driver) {
  const { data, error } = await supabase.from('drivers').insert([driver]);
  if (error) throw error;
  return data;
}

async function updateDriver(id, updates) {
  const { data, error } = await supabase.from('drivers').update(updates).eq('id', id);
  if (error) throw error;
  return data;
}

async function deleteDriver(id) {
  const { data, error } = await supabase.from('drivers').delete().eq('id', id);
  if (error) throw error;
  return data;
}

module.exports = { getAllDrivers, createDriver, updateDriver, deleteDriver };
