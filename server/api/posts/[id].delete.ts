import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (e) => {

    const config = useRuntimeConfig();
    const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_ANON_KEY);


    // nicht await readBody, weil wir id nicht über den body mitgegeben haben, sonmdern über die route params
    const id = e.context.params?.id;

    // extrahiert error von response, falls vorhanden, returnt sonst nichts
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if(error) {
        console.error('Das Löschen hat in der Server Route nicht funktioniert: ', error);
    }

})