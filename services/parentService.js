const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getAllParents() {
  const { data, error } = await supabase.from('parents').select('*');
  if (error) throw error;
  return data;
}

async function createParent(userData, parentData) {
  // 1. Insert parent first (without userId)
  const { data: parent, error: parentError } = await supabase
    .from('parents')
    .insert([parentData])
    .select()
    .single();

  if (parentError) throw new Error(parentError.message);

  // 2. Insert user with link to parentId
  const { data: user, error: userError } = await supabase
    .from('users')
    .insert([{
      email: userData.email,
      password: userData.password,
      role: 'parent',
      parentId: parent.id,
      monitorId: null
    }])
    .select()
    .single();

  if (userError) throw new Error(userError.message);

  // 3. Update parent with userId
  const { data: updatedParent, error: updateError } = await supabase
    .from('parents')
    .update({ userId: user.id })
    .eq('id', parent.id)
    .select()
    .single();

  if (updateError) throw new Error(updateError.message);

  return { parent: updatedParent, user };
}


module.exports = { getAllParents, createParent };
