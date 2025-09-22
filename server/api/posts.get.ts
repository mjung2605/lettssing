import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async () => {

    const config = useRuntimeConfig();
    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);



    // extrahiert error von response, falls vorhanden, und data
    const { data, error } = await supabase.from('posts').select('*').order("created_at", { ascending: false });
    if(error) {
        console.error('Das Getten hat in der Server Route nicht funktioniert: ', error);
    }

    return data;

})