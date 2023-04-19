import { supabase } from "@/supabase/config";
import { toast } from "react-toastify";

export const authStore = (set, get) => ({
  userdata: {},
  userLoggin: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    get().fetchUser;
  },
  logout: async (router) => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      set({ userdata: {} });
      toast.success("Logged out");
      router;
    }
  },
  fetchUser: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    set({ userdata: user });
  },
});
