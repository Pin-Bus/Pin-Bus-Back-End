const { createClient } = require("@supabase/supabase-js");
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

class BusService {
  async getAll() {
    const { data, error } = await supabase.from("buses").select("*");
    if (error) throw error;
    return data;
  }

  async getById(id) {
    const { data, error } = await supabase
      .from("buses")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(busData) {
  if (!busData) throw new Error("No bus data provided");

  const { data, error } = await supabase
    .from("buses")
    .insert([busData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

  async update(id, busData) {
    const { data, error } = await supabase
      .from("buses")
      .update(busData)
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase.from("buses").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

module.exports = new BusService();
