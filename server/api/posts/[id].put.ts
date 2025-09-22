import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (e) => {

    const config = useRuntimeConfig();
    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);

    const body = await readBody(e); // title, description, //// teaser_img, img
    const id = e.context.params?.id;

    // extrahiert error von response, falls vorhanden, returnt sonst nichts NBOCH ADDEN. WHERE MIT ID
    const { error } = await supabase.from('posts').update({ title: body.title, text: body.description }); // , teaser_img: body.teaser_img, img: body.img
    if(error) {
        console.error('Das Ändern hat in der Server Route nicht funktioniert: ', error);
    }

})