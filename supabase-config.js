// ============================================================
// SUPABASE CONFIG — fill these in after creating your project
// ============================================================
// 1. Go to https://supabase.com → New Project
// 2. Once created, go to Project Settings → API
// 3. Copy "Project URL" into SUPABASE_URL below
// 4. Copy "anon public" key into SUPABASE_ANON_KEY below
// (The anon key is safe to expose in front-end code — it only
// allows what your Supabase security rules permit.)
// ============================================================

const SUPABASE_URL = "https://fyqusckvktmisxqzmakd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_5PBsUtAr_nA03U4YIyKyQw_Q2HYEEQF";

// Creates the Supabase client — used by every page.
// Requires the Supabase JS CDN script to be loaded first (see each HTML file's <head>).
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
