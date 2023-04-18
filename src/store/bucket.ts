import { supabase } from "@/supabase/config";

export const buckerStore = (set, get) => ({
  uploadToBucket: async (avatarFile: any) => {
    const { data, error } = await supabase.storage
      .from("preview")
      .upload(`images/${avatarFile.name}`, avatarFile, {
        cacheControl: "3600",
        upsert: false,
      });
  },
});
