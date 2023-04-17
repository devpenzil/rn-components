import { supabase } from "@/supabase/config";
import { component } from "@/types/supabase";
import { toast } from "react-toastify";

export const databaseStore = (set, get) => ({
  components: {},
  uploadComponent: async (payload: component, route: any) => {
    const Response = await supabase.from("components").insert(payload);
    if (Response.status === 201) {
      toast.success("Component Submited");
      route;
    }
  },
  fetchComponents: async () => {
    const Response = await supabase.from("components").select();
    set({ components: Response.data });
  },
});
