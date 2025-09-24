import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (e) => {
    console.log('API wurde aufgerufen, id:', e.context.params?.id)

    const config = useRuntimeConfig();
    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);

    const id = e.context.params?.id;

    // extrahiert error von response, falls vorhanden, returnt sonst nichts
    const { data, error } = await supabase.from('posts').select('*').eq("id", Number(id)); // id, created_at, title, text, teaser_img, img[]
    if(error) {
        console.error('Das Getten des einzelnen Artikels hat in der Server Route nicht funktioniert: ', error);
    } else return data[0]; // nur data gibt array mit einem objekt zurück, desw [0]

})