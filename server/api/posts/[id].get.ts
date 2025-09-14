import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async () => {

    const config = useRuntimeConfig();
    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);

    // extrahiert error von response, falls vorhanden, returnt sonst nichts
    const { error } = await supabase.from('posts').select('*'); // id, created_at, title, text, teaser_img, img[]
    if(error) {
        console.error('Das Getten des einzelnen Artikels hat in der Server Route nicht funktioniert: ', error);
    }

})