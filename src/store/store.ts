import { create } from "zustand";
import { authStore } from "./auth";
import { buckerStore } from "./bucket";
import { databaseStore } from "./database";
import { TypeUserdata } from "@/types/supabase";
export interface InterfaceStore {
  userdata: TypeUserdata | {};
  userLoggin: () => void;
  fetchUser: () => void;
  logout: () => void;
  imageUrl: string;
  uploadToBucket: () => void;
}
export const useStore = create<InterfaceStore>((...a) => ({
  ...authStore(...a),
  ...buckerStore(...a),
  ...databaseStore(...a),
}));
