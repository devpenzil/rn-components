import { supabase } from "@/supabase/config";

export const authStore = (set, get) => ({
  userdata: {},
  userLoggin: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    get().fetchUser;
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      set({ userdata: {} });
    }
  },
  fetchUser: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    set({ userdata: user });
  },
});
