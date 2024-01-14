import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://pnywdotkkxydksilsqzo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBueXdkb3Rra3h5ZGtzaWxzcXpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTE5OTkwMywiZXhwIjoyMDIwNzc1OTAzfQ.crDqhiPzgauMLpxLkXdUvEego4wrYfCqRZRbAbQwC0I"
);

export const UploadData = async (name, email, message) => {
  try {
    const { error } = await supabase
      .from("contact")
      .insert({ name: name, email: email, message: message });
    return true;
  } catch (error) {
    console.log("Error: " + error);
    return false;
  }
};
