const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getAllStudents() {
  const { data, error } = await supabase.from('students').select('*');
  if (error) throw error;
  return data;
}

async function createStudent(student) {
  const { data, error } = await supabase.from('students').insert([student]);
  if (error) throw error;
  return data;
}

module.exports = { getAllStudents, createStudent };
