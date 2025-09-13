const { createClient } = require('@supabase/supabase-js');
const authService = require('./authService');
require('dotenv').config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getAllMonitors() {
  const { data, error } = await supabase.from('monitors').select('*');
  if (error) throw error;
  return data;
}

async function createMonitor({ email, password, name }) {
  // Create user with role=monitor
  const user = await authService.createUser(email, password, 'monitor');

  // Then create monitor record
  const { data, error } = await supabase
    .from('monitors')
    .insert([{ name, user_id: user.id }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}


async function updateMonitor(id, updates) {
  const { data, error } = await supabase.from('monitors').update(updates).eq('id', id);
  if (error) throw error;
  return data;
}

async function deleteMonitor(id) {
  const { data, error } = await supabase.from('monitors').delete().eq('id', id);
  if (error) throw error;
  return data;
}

module.exports = { getAllMonitors, createMonitor, updateMonitor, deleteMonitor };
