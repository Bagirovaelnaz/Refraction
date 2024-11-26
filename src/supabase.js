import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fzymqsqitmhlrltsccwx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6eW1xc3FpdG1obHJsdHNjY3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MzQwNTMsImV4cCI6MjAzOTQxMDA1M30.G4eq92Eakty1GaqJaF43pScNjLq9J7YM2lZFKh_6JI4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
