import { supabase } from "@/supabase/config";
import { toast } from "react-toastify";

export const buckerStore = (set, get) => ({
  imageUrl:
    "https://yrbwrmdivnvzylkobrbq.supabase.co/storage/v1/object/public/preview/elementor-placeholder-image.webp?t=2023-04-18T16%3A39%3A03.271Z",
  uploadToBucket: async (avatarFile: any) => {
    const { data, error } = await toast.promise(
      supabase.storage
        .from("preview")
        .upload(`${avatarFile?.name}`, avatarFile, {
          cacheControl: "3600",
          upsert: false,
        }),
      {
        error: "Something went wrong",
        pending: "Uploading Image",
        success: "Image Uploaded",
      }
    );
    if (!error) {
      console.log(data);
      set({ imageUrl: `${process.env.NEXT_PUBLIC_BUCKET}${data.path}` });
    }
  },
});
