import { createClient } from '@supabase/supabase-js';
import { PowerSyncConfig } from '@powersync/client';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const powerSyncConfig: PowerSyncConfig = {
  supabaseClient: supabase,
  // Outras configurações do PowerSync
};
