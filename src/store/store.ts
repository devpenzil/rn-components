import { create } from "zustand";
import { authStore } from "./auth";
import { buckerStore } from "./bucket";
export const useStore = create((...a) => ({
  ...authStore(...a),
  ...buckerStore(...a),
}));
